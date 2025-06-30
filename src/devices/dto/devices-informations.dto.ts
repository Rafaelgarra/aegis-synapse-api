import { DeviceConnectivityStatus } from "src/common/enums/device/device-connectivity-status.enum";
import { DeviceOperationMode } from "src/common/enums/device/device-operation-mode.enum";
import { DevicePowerMode } from "src/common/enums/device/device-power-mode.enum";
import { MissionsEntity } from "src/entities/missions/missions";
import { StatusEntity } from "src/entities/status/status.entity";

export class DevicesInformationsDto {
    constructor(partial: Partial<DevicesInformationsDto> = {}) {
        Object.assign(this, partial);
    }

    id: number;
    deviceName: string;
    serialNumber: string;
    model: string;
    manufactureDate: Date;
    batteryLevel: number;
    ConnectionStatus: DeviceConnectivityStatus;
    operationMode: DeviceOperationMode;
    powerMode: DevicePowerMode;
    operationalStatus: StatusEntity;
    missions: MissionsEntity[];

}