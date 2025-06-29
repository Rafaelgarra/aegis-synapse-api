import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CollectedDataEntity } from "../collected_data/collected_data";
import { StatusEntity } from "../status/status.entity";

@Entity()
export class SensorDatumEntity { // Entity name singular: SensorDatum, not SensorData
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, name: 'sensor_name' })
    sensorName: string;

    @Column({ type: 'double precision', nullable: true, name: 'numeric_value' })
    numericValue: number; // For int or float

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'text_value' })
    textValue: string; // For strings

    @Column({ type: 'varchar', length: 20, nullable: true, name: 'unit_of_measure' })
    unitOfMeasure: string; // Ex: "°C", "%", "ppm", "hPa"

    @OneToOne(() => CollectedDataEntity, (collectedData) => collectedData.sensorData, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'collected_data_id' }) // Foreign key in this table
    collectedData: CollectedDataEntity;

    @Column({ type: 'int', unique: true, nullable: false, name: 'collected_data_id' }) // Explicit column for the FK, unique for OneToOne
    collectedDataId: number;

    @ManyToOne(() => StatusEntity, { nullable: false }) // Uma missão DEVE ter um status
    @JoinColumn({ name: 'sensor_status_id' }) // Nome da coluna FK na tabela 'sensor_entity'
    sensorStatus: StatusEntity; // Propriedade que conterá o OBJETO StatusEntity

    @Column({ type: 'int', nullable: false, name: 'sensor_status_id' })
    sensorStatusId: number;
}
