import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOrCreate(userData: { sub: string; email: string; name: string }) {
    let user = await this.userModel.findOne({ auth0Id: userData.sub });

    if (!user) {
      user = new this.userModel({
        auth0Id: userData.sub,
        email: userData.email,
        name: userData.name,
      });
      await user.save();
    }

    return user;
  }

  async getUserByAuth0Id(auth0Id: string) {
    return this.userModel.findOne({ auth0Id }).exec();
  }

  async upgradeToPremium(auth0Id: string, expirationDate: Date) {
    return this.userModel.findOneAndUpdate(
      { auth0Id },
      { isPremium: true, premiumExpiration: expirationDate },
      { new: true },
    );
  }
}
