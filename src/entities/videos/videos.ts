import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CollectedDataEntity } from "../collected_data/collected_data";
import { StatusEntity } from "../status/status.entity";

@Entity()
export class VideosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, name: 'file_name' })
    fileName: string;

    @Column({ type: 'text', nullable: false, name: 'file_path' })
    filePath: string; // URL or storage path

    @Column({ type: 'int', nullable: true, name: 'duration_seconds' })
    durationSeconds: number;

    @Column({ type: 'varchar', length: 10, nullable: true })
    format: string; // Ex: "MP4", "AVI"

    @Column({ type: 'double precision', nullable: true, name: 'size_mb' })
    sizeMb: number;

    @OneToOne(() => CollectedDataEntity, (collectedData) => collectedData.video, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'collected_data_id' })
    collectedData: CollectedDataEntity;

    @Column({ type: 'int', unique: true, nullable: false, name: 'collected_data_id' }) // Explicit column for the FK, unique for OneToOne
    collectedDataId: number;

    @ManyToOne(() => StatusEntity, { nullable: false }) // Uma missão DEVE ter um status
    @JoinColumn({ name: 'media_status_id' }) // Nome da coluna FK na tabela 'media_entity'
    mediaStatus: StatusEntity; // Propriedade que conterá o OBJETO StatusEntity

    @Column({ type: 'int', nullable: false, name: 'media_status_id' })
    mediaStatusId: number;
}