import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task  {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;
    
    @Column('boolean', {default: true})
    status: boolean = true;
}