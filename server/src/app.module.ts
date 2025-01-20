import { Module } from '@nestjs/common';
import { S3ComponentModule } from './s3-component/s3-component.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [S3ComponentModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule {}
