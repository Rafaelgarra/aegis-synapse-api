import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CollectedDataEntity } from "../collected_data/collected_data";
import { MissionsEntity } from "../missions/missions";

@Entity()
export class AIAnalysisEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, name: 'analysis_type' })
    analysisType: string; // Ex: "Fire Detection", "Species Count"

    @Column({ type: 'text', nullable: false, name: 'result_text' })
    resultText: string; // Description of IA conclusion

    @Column({ type: 'double precision', nullable: true, name: 'confidence_score' })
    confidenceScore: number; // 0.0 to 1.0

    @Column({ type: 'timestamp with time zone', nullable: false, name: 'analysis_datetime' })
    analysisDatetime: Date;

    @Column({ type: 'varchar', length: 100, nullable: true, name: 'ia_model_used' })
    iaModelUsed: string; // Ex: "CNN_v2", "RandomForest_v1"

    // Relation to CollectedData (optional)
    @OneToOne(() => CollectedDataEntity, (collectedData) => collectedData.aiAnalysis, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'collected_data_id' })
    collectedData: CollectedDataEntity;

    @Column({ type: 'int', unique: true, nullable: true, name: 'collected_data_id' }) // Explicit column for FK, unique for OneToOne
    collectedDataId: number;

    // Relation to Mission (optional, if analysis is for a whole mission)
    @ManyToOne(() => MissionsEntity, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'mission_id' })
    mission: MissionsEntity;

    @Column({ type: 'int', nullable: true, name: 'mission_id' }) // Explicit column for FK
    missionId: number;
}
