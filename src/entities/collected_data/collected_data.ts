import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MissionsEntity } from "../missions/missions";
import { SensorDatumEntity } from "../sensor_data/sensor_data";
import { ImagesEntity } from "../images/images";
import { VideosEntity } from "../videos/videos";
import { AIAnalysisEntity } from "../ai_analyses/ai_analyses";

@Entity()
export class CollectedDataEntity {
    @PrimaryGeneratedColumn()
    id: number; // Primary key renamed to 'id'

    @Column({ type: 'timestamp with time zone', nullable: false, name: 'collection_datetime' })
    collectionDatetime: Date;

    @Column({ type: 'double precision', nullable: false })
    latitude: number;

    @Column({ type: 'double precision', nullable: false })
    longitude: number;

    @Column({ type: 'double precision', nullable: true })
    altitude: number;

    @Column({ type: 'double precision', nullable: true, name: 'aegis_battery_level' })
    aegisBatteryLevel: number;

    @Column({ type: 'varchar', length: 50, nullable: false, name: 'data_type' })
    dataType: string; // Ex: "Sensor", "Image", "Video"

    @ManyToOne(() => MissionsEntity, (mission) => mission.collectedData)
    @JoinColumn({ name: 'mission_id' })
    mission: MissionsEntity;

    @Column({ type: 'int', nullable: false, name: 'mission_id' }) // Explicit column for the FK
    missionId: number;

    @OneToOne(() => SensorDatumEntity, (sensorDatum) => sensorDatum.collectedData)
    sensorData: SensorDatumEntity;

    @OneToOne(() => ImagesEntity, (image) => image.collectedData)
    image: ImagesEntity;

    @OneToOne(() => VideosEntity, (video) => video.collectedData)
    video: VideosEntity;

    @OneToOne(() => AIAnalysisEntity, (aiAnalysis) => aiAnalysis.collectedData)
    aiAnalysis: AIAnalysisEntity; // If analysis is directly tied to a single data point
}
