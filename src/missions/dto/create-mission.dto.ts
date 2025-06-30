import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsNotEmpty, IsNumber, Min } from 'class-validator';

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
        example: 2,
    })
    @IsNotEmpty()
    deviceId: number;

    @ApiProperty({
        description: 'ID do status da missão inicial do dispositivo. Deve ser um ID de um status existente na tabela de "statuses".',
        example: 1, // Adjusted to 0 for consistency with your @Min(0) validator
        minimum: 0, // Adjusted to 0 for consistency with your @Min(0) validator
      })
      @IsNotEmpty({ message: 'O ID do status operacional é obrigatório.' })
      @IsNumber({}, { message: 'O ID do status operacional deve ser um número.' })
      @Min(0, { message: 'O ID do status operacional deve ser maior ou igual a 0.' })
      missionStatusId: number; // Renamed to missionStatusId
}