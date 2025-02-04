import { Controller, Get, Query, Res } from '@nestjs/common';
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
    const redirectUri = encodeURIComponent('http://localhost:3000/callback');

    const authUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid profile email`;
    res.redirect(authUrl);
  }

  @Get('callback')
  async callback(@Query('code') code: string) {
    const domain = process.env.AUTH0_DOMAIN;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const clientSecret = process.env.AUTH0_CLIENT_SECRET;
    const redirectUri = 'http://localhost:3000/callback';

    // 1️⃣ Obtener tokens desde Auth0
    const tokenUrl = `https://${domain}/oauth/token`;
    const response = await axios.post(tokenUrl, {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    });

    const { access_token, id_token } = response.data;

    // 2️⃣ Obtener datos del usuario desde Auth0
    const userInfoUrl = `https://${domain}/userinfo`;
    const userInfoResponse = await axios.get(userInfoUrl, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const { sub, email, name } = userInfoResponse.data;

    // 3️⃣ Buscar o crear usuario en MongoDB
    const user = await this.userService.findOrCreate({ sub, email, name });

    // 4️⃣ Retornar tokens y datos del usuario
    return { access_token, id_token, user };
  }
}

