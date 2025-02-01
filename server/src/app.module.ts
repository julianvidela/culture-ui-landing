import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { S3ComponentModule } from './s3-component/s3-component.module';
import { S3DocumentModule } from './s3-document/s3-document.module';
import { AuthModule } from './auth/auth.module';
import { ComponentModule } from './component/component.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ComponentModule,
    S3DocumentModule,
    UserModule,
    AuthModule,
    //S3ComponentModule,
    //
  ],
})
export class AppModule {}
