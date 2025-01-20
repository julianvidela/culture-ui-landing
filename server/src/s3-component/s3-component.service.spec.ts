import { Test, TestingModule } from '@nestjs/testing';
import { S3ComponentService } from './s3-component.service';

describe('S3ComponentService', () => {
  let service: S3ComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3ComponentService],
    }).compile();

    service = module.get<S3ComponentService>(S3ComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
