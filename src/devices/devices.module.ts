import { Module } from '@nestjs/common';
import { DevicesController } from './controllers/devices.controller';
import { DevicesService } from './services/devices.service';
import { Type } from 'class-transformer';
import { DevicesEntity } from 'src/entities/devices/devices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DevicesEntity])],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
