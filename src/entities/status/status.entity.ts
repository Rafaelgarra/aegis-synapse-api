import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { StatusTypeEnum } from 'src/common/enums/status-type.enum';

@Entity('statuses')
export class StatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false, name: 'status_name' })
    statusName: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({
        type: 'enum',
        enum: StatusTypeEnum,
        nullable: false,
        name: 'status_type',
    })
    statusType: StatusTypeEnum;

}