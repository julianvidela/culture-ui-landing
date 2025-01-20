import { Test, TestingModule } from '@nestjs/testing';
import { S3ComponentController } from './s3-component.controller';

describe('S3ComponentController', () => {
  let controller: S3ComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [S3ComponentController],
    }).compile();

    controller = module.get<S3ComponentController>(S3ComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
