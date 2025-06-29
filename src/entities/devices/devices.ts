import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { MissionsEntity } from '../missions/missions';
import { StatusEntity } from '../status/status.entity';

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

    @ManyToOne(() => StatusEntity, { nullable: false })
    @JoinColumn({ name: 'operational_status_id' })
    operationalStatus: StatusEntity;

    @Column({ type: 'int', nullable: false, name: 'operational_status_id' })
    operationalStatusId: number;

    @OneToMany(() => MissionsEntity, (mission) => mission.device)
    missions: MissionsEntity[];
}
