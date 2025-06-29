import { Module } from '@nestjs/common';
import { RedisDataController } from './controllers/redis-data.controller';
import { RedisDataService } from './services/redis-data.service';

@Module({
  controllers: [RedisDataController],
  providers: [RedisDataService]
})
export class RedisDataModule {}
