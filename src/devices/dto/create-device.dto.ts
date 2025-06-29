// src/devices/dto/create-device.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, Length, IsNumber, Min } from 'class-validator';

export class CreateDeviceDto {
  @ApiProperty({
    description: 'Nome amigável do dispositivo (ex: "Aegis Drone X1", "Rover Explorer Y")',
    example: 'Aegis Test X1',
    minLength: 3,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'O nome do dispositivo não pode ser vazio.' })
  @IsString({ message: 'O nome do dispositivo deve ser uma string.' })
  @Length(3, 255, { message: 'O nome do dispositivo deve ter entre 3 e 255 caracteres.' })
  deviceName: string;

  @ApiProperty({
    description: 'Número de série único do dispositivo.',
    example: 'SN-AEGIS-X1-001A',
    // uniqueItems: true, // This is a validator-level constraint, not an ApiProperty attribute.
    minLength: 5,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'O número de série não pode ser vazio.' })
  @IsString({ message: 'O número de série deve ser uma string.' })
  @Length(5, 255, { message: 'O número de série deve ter entre 5 e 255 caracteres.' })
  serialNumber: string;

  @ApiProperty({
    description: 'Modelo específico do dispositivo (ex: "Drone de Reconhecimento", "Submarino Autônomo").',
    example: 'Drone de Reconhecimento',
    minLength: 3,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'O modelo não pode ser vazio.' })
  @IsString({ message: 'O modelo deve ser uma string.' })
  @Length(3, 255, { message: 'O modelo deve ter entre 3 e 255 caracteres.' })
  model: string;

  @ApiProperty({
    description: 'Data de fabricação do dispositivo no formato ISO 8601 (ex: "2023-01-15").',
    example: '2023-01-15',
  })
  @IsNotEmpty({ message: 'A data de fabricação não pode ser vazia.' })
  @IsDateString({}, { message: 'A data de fabricação deve ser uma string de data válida (ISO 8601).' })
  // For `manufactureDate: Date`, you typically send it as an ISO 8601 string from the client.
  // The @IsDateString() decorator validates this string.
  // If you need it as a Date object in your service, consider using a @Transform() decorator.
  manufactureDate: Date; 

  @ApiProperty({
    description: 'ID do status operacional inicial do dispositivo. Deve ser um ID de um status existente na tabela de "statuses".',
    example: 0, // Adjusted to 0 for consistency with your @Min(0) validator
    minimum: 0, // Adjusted to 0 for consistency with your @Min(0) validator
  })
  @IsNotEmpty({ message: 'O ID do status operacional é obrigatório.' })
  @IsNumber({}, { message: 'O ID do status operacional deve ser um número.' })
  @Min(0, { message: 'O ID do status operacional deve ser maior ou igual a 0.' })
  operationalStatusId: number;
}