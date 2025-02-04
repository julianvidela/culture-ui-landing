import { Controller, Get, HttpException, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import axios from 'axios';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Get('login')
  login(@Res() res: Response) {
    const domain = process.env.AUTH0_DOMAIN;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const redirectUri = encodeURIComponent('http://localhost:3000');

    const authUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid profile email`;
    res.redirect(authUrl);
  }

  @Get('callback')
  async callback(@Query('code') code: string) {
    try {
      if (!code) {
        throw new HttpException('Authorization code is required', HttpStatus.BAD_REQUEST);
      }

      const domain = process.env.AUTH0_DOMAIN;
      const clientId = process.env.AUTH0_CLIENT_ID;
      const clientSecret = process.env.AUTH0_CLIENT_SECRET;
      const redirectUri = 'http://localhost:3000';

      //Obtener tokens desde Auth0
      const tokenUrl = `https://${domain}/oauth/token`;
      const response = await axios.post(tokenUrl, {
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      });

      const { access_token, id_token } = response.data;
      if (!access_token || !id_token) {
        throw new HttpException('Failed to retrieve tokens from Auth0', HttpStatus.UNAUTHORIZED);
      }

      //Obtener datos del usuario desde Auth0
      const userInfoUrl = `https://${domain}/userinfo`;
      const userInfoResponse = await axios.get(userInfoUrl, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const { sub, email, name } = userInfoResponse.data;
      if (!sub || !email) {
        throw new HttpException('User data is incomplete', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      //Buscar o crear usuario en MongoDB
      const user = await this.userService.findOrCreate({ sub, email, name });

      //Retornar tokens y datos del usuario
      return { access_token, id_token, user };

    } catch (error) {
      console.error('Error in Auth Callback:', error.response?.data || error.message);

      throw new HttpException(
        error.response?.data?.error_description || 'Internal server error',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
