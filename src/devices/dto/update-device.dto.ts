// src/devices/dto/update-device.dto.ts
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateDeviceDto } from './create-device.dto';
import { IsOptional, IsNumber, Min } from 'class-validator'; // Importe IsNumber e Min

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
    @ApiProperty({
        description: 'ID do novo status operacional do dispositivo. Deve ser um ID de um status existente na tabela de "statuses".',
        example: 1, // Exemplo: Supondo que 1 seja o ID para 'Active' em sua tabela de statuses
        minimum: 0, // Use 0 se você configurou o ID 0 para seu status inicial/inativo
        required: false,
    })
    @IsOptional() // Opcional porque você pode querer atualizar outras coisas sem mudar o status
    @IsNumber({}, { message: 'O ID do status operacional deve ser um número.' })
    @Min(0, { message: 'O ID do status operacional deve ser maior ou igual a 0.' }) // Ajuste conforme seu ID mínimo
    operationalStatusId?: number; // Agora você passa o ID do status
}