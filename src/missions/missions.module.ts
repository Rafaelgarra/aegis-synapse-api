import { Module } from '@nestjs/common';
import { MissionsController } from './controllers/missions.controller';
import { MissionsService } from './services/missions.service';
import { MissionsEntity } from 'src/entities/missions/missions';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([MissionsEntity])],
	controllers: [MissionsController],
	providers: [MissionsService]
})
export class MissionsModule { }
