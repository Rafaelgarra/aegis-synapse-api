import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateMissionDto } from '../dto/create-mission.dto';
import { UpdateMissionDto } from '../dto/update-mission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MissionsEntity } from 'src/entities/missions/missions';
import { Repository } from 'typeorm';

@Injectable()
export class MissionsService {
    constructor(@InjectRepository(MissionsEntity) private readonly repository: Repository<MissionsEntity>) { }

    create(createMissionDto: CreateMissionDto) {
        try {
            return this.repository.save(createMissionDto);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(id: number, updateMissionDto: UpdateMissionDto) {
        try {
            const result = await this.repository.update({ id }, updateMissionDto);
            if (result.affected === 0) {
                throw new NotFoundException(`Mission with ID #${id} not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async remove(id: number) {
        try {
            const result = await this.repository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Mission with ID #${id} not found`);
            }
            return true;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    findOne(id: number) {
        try {
            return this.repository.findOne({ where: { id } });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    findAll() {
        try {
            return this.repository.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

}

