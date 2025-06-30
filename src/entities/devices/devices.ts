import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { MissionsEntity } from '../missions/missions';
import { StatusEntity } from '../status/status.entity';
import { DeviceConnectivityStatus } from 'src/common/enums/device/device-connectivity-status.enum';
import { DeviceOperationMode } from 'src/common/enums/device/device-operation-mode.enum';
import { DevicePowerMode } from 'src/common/enums/device/device-power-mode.enum';

@Entity()
export class DevicesEntity {
    @PrimaryGeneratedColumn()
    id: number; // Primary key renamed to 'id' for common practice

    @Column({ type: 'varchar', length: 255, nullable: false, name: 'device_name' })
    deviceName: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false, name: 'serial_number' })
    serialNumber: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    model: string;

    @Column({ type: 'date', nullable: false, name: 'manufacture_date' })
    manufactureDate: Date;

    @Column({ type: 'double precision', nullable: true, name: 'batteryLevel' })
    batteryLevel: number;

    @Column({ type: 'enum', enum: DeviceConnectivityStatus, nullable: false, default: DeviceConnectivityStatus.Offline, name: 'connection_status' })
    ConnectionStatus: DeviceConnectivityStatus;

    @Column({ type: 'enum', enum: DeviceOperationMode, nullable: false, default: DeviceOperationMode.Inactive, name: 'operation_mode' })
    operationMode: DeviceOperationMode;

    @Column({ type: 'enum', enum: DevicePowerMode, nullable: false, default: DevicePowerMode.PowerOff, name: 'power_mode' })
    powerMode: DevicePowerMode;

    @ManyToOne(() => StatusEntity, { nullable: false })
    @JoinColumn({ name: 'operational_status_id' })
    operationalStatus: StatusEntity;

    @Column({ type: 'int', nullable: false, name: 'operational_status_id' })
    operationalStatusId: number;

    @OneToMany(() => MissionsEntity, (mission) => mission.device)
    missions: MissionsEntity[];
}
