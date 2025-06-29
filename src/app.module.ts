import { Module } from '@nestjs/common';
import { RedisDataModule } from './redis-data/redis-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesEntity } from './entities/devices/devices';
import { AIAnalysisEntity } from './entities/ai_analyses/ai_analyses';
import { CollectedDataEntity } from './entities/collected_data/collected_data';
import { ImagesEntity } from './entities/images/images';
import { MissionsEntity } from './entities/missions/missions';
import { SensorDatumEntity } from './entities/sensor_data/sensor_data';
import { VideosEntity } from './entities/videos/videos';
import { MissionsModule } from './missions/missions.module';
import { ConfigModule } from '@nestjs/config';
import { DevicesModule } from './devices/devices.module';
import { StatusEntity } from './entities/status/status.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // Path to your .env file
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        DevicesEntity,
        AIAnalysisEntity,
        CollectedDataEntity,
        ImagesEntity,
        MissionsEntity,
        SensorDatumEntity,
        VideosEntity,
        StatusEntity
      ],
      synchronize: true, //only use on dev!
      ssl: { rejectUnauthorized: false }, //need for Neon
    }),
    DevicesModule,
    MissionsModule,
    RedisDataModule,
  ],
})
export class AppModule { }