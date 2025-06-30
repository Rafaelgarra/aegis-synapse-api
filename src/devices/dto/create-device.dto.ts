import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsNumber, Min, Max, IsEnum, IsInt } from 'class-validator';
import { DeviceConnectivityStatus } from 'src/common/enums/device/device-connectivity-status.enum';
import { DeviceOperationMode } from 'src/common/enums/device/device-operation-mode.enum';
import { DevicePowerMode } from 'src/common/enums/device/device-power-mode.enum';

export class CreateDeviceDto {
  @ApiProperty({ description: 'Nome do dispositivo', example: 'Aegis Sentinel Mk-I' })
  @IsString()
  @IsNotEmpty()
  deviceName: string;

  @ApiProperty({ description: 'Número de série único do dispositivo', example: 'AESENT-001-XYZ' })
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @ApiProperty({ description: 'Modelo do dispositivo', example: 'Sentient 3000' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ description: 'Data de fabricação do dispositivo (formato YYYY-MM-DD)', example: '2023-01-15' })
  @IsDateString()
  @IsNotEmpty()
  manufactureDate: Date;

  @ApiProperty({ description: 'Nível atual da bateria (0-100)', example: 0 })
  @IsNumber()
  @IsInt() // Assumindo que o nível da bateria é um número inteiro (0-100)
  @Min(0)
  @Max(100)
  batteryLevel: number;

  @ApiProperty({ enum: DeviceConnectivityStatus, description: 'Status de conectividade do dispositivo', example: DeviceConnectivityStatus.Offline })
  @IsEnum(DeviceConnectivityStatus)
  ConnectionStatus: DeviceConnectivityStatus;

  @ApiProperty({ enum: DeviceOperationMode, description: 'Modo de operação atual do dispositivo', example: DeviceOperationMode.Inactive })
  @IsEnum(DeviceOperationMode)
  operationMode: DeviceOperationMode;

  @ApiProperty({ enum: DevicePowerMode, description: 'Modo de gestão de energia do dispositivo', example: DevicePowerMode.PowerOff })
  @IsEnum(DevicePowerMode)
  powerMode: DevicePowerMode;

  @ApiProperty({ description: 'ID do status operacional (referencia a tabela StatusEntity)', example: 1 })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  operationalStatusId: number;
}