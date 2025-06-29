import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateMissionDto {
    @ApiProperty({
        description: 'Nome da missão',
        example: 'Missão de Mapeamento Florestal',
    })
    @IsNotEmpty()
    @IsString()
    missionName: string;

    @ApiProperty({
        description: 'Objetivo detalhado da missão',
        example: 'Mapear áreas desmatadas na região X.',
        required: false,
    })
    @IsOptional()
    @IsString()
    objective?: string;

    @ApiProperty({
        description: 'Data e hora de início da missão (ISO 8601)',
        example: '2025-06-28T10:00:00Z',
    })
    @IsDateString()
    startDatetime: Date;

    @ApiProperty({
        description: 'Data e hora de fim da missão (ISO 8601)',
        example: '2025-06-28T12:00:00Z',
    })
    @IsDateString()
    endDatetime: Date;

    @ApiProperty({
        description: 'ID do dispositivo aéreo que realizará a missão',
        example: 1,
    })
    @IsNotEmpty()
    deviceId: number;
}