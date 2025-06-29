import { Controller, Get } from '@nestjs/common';
import { RedisDataService } from '../services/redis-data.service';

@Controller('redis-data')
export class RedisDataController {
    constructor( readonly service: RedisDataService) {}

    @Get("get-test")
    getRedisData() {
        return this.service.getRedisData();
    }
}
