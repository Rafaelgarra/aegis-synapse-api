import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CollectedDataEntity } from "../collected_data/collected_data";
import { DevicesEntity } from "../devices/devices";
import { StatusEntity } from "../status/status.entity";

@Entity()
export class MissionsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, name: 'mission_name' })
    missionName: string;

    @Column({ type: 'text', nullable: true })
    objective: string;

    @Column({ type: 'timestamp with time zone', nullable: false, name: 'start_datetime' })
    startDatetime: Date;

    @Column({ type: 'timestamp with time zone', nullable: false, name: 'end_datetime' })
    endDatetime: Date;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'researched_area' })
    researchedArea: string;

    @ManyToOne(() => StatusEntity, { nullable: false })
    @JoinColumn({ name: 'mission_status_id' })
    missionStatus: StatusEntity;

    @Column({ type: 'int', nullable: false, name: 'mission_status_id' })
    missionStatusId: number;

    @ManyToOne(() => DevicesEntity, (device) => device.missions)
    @JoinColumn({ name: 'device_id' })
    device: DevicesEntity;

    @Column({ type: 'int', nullable: false, name: 'device_id' }) // <-- AJUSTE AQUI: Propriedade explícita para a FK
    deviceId: number; // <-- AJUSTE AQUI: Nome da propriedade para 'deviceId'

    @OneToMany(() => CollectedDataEntity, (collectedData) => collectedData.mission)
    collectedData: CollectedDataEntity[];
}