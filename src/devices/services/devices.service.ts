import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DevicesEntity } from 'src/entities/devices/devices';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';

@Injectable()
export class DevicesService {
    constructor(@InjectRepository(DevicesEntity) private readonly repository: Repository<DevicesEntity>) { }

    create(createDeviceDto: CreateDeviceDto) {
        try {
            return this.repository.save(createDeviceDto);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    update(id: number, updateDeviceDto: UpdateDeviceDto) {
        try {
            return this.repository.update({ id }, updateDeviceDto);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    remove(id: number) {
        try {
            return this.repository.delete(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findOne(id: number) {
        try {
            return this.repository.findOne({ where: { id } });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findAll() {
        try {
            return this.repository.find();
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
