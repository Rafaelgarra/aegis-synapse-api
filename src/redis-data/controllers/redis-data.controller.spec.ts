import { Test, TestingModule } from '@nestjs/testing';
import { RedisDataController } from './redis-data.controller';

describe('RedisDataController', () => {
  let controller: RedisDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisDataController],
    }).compile();

    controller = module.get<RedisDataController>(RedisDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
