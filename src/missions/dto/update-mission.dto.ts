import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateMissionDto } from './create-mission.dto';
import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class UpdateMissionDto extends PartialType(CreateMissionDto) {

    @ApiProperty({
        description: 'ID do novo status da missão. Deve ser um ID de um status existente na tabela "statuses".',
        example: 4,
        minimum: 0,
        required: false,
    })
    @IsOptional()
    @IsNumber({}, { message: 'O ID do status da missão deve ser um número.' })
    @Min(0, { message: 'O ID do status da missão deve ser maior ou igual a 0.' })
    missionStatusId?: number;
}