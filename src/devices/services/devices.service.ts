import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DevicesEntity } from 'src/entities/devices/devices';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { DevicesInformationsDto } from '../dto/devices-informations.dto';

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

    async findDeviceInformation(): Promise<DevicesInformationsDto[]> {
    try {
        const devices = await this.repository.find({
            relations: [
                'operationalStatus',
                'missions',
                'missions.missionStatus',
                'missions.collectedData',
                'missions.collectedData.sensorData',
                'missions.collectedData.image',
                'missions.collectedData.video',
                'missions.collectedData.aiAnalysis'
            ],
        });

            // Mapeia as entidades para a DTO de resposta
            return devices.map(device => {
                const dto = new DevicesInformationsDto();
                Object.assign(dto, device);
                return dto;
            });
        } catch (error) {
            console.error('Erro ao buscar todos os dispositivos para o frontend:', error);
            throw new Error('Não foi possível carregar os dados dos dispositivos. ' + error.message);
        }
    }
}
