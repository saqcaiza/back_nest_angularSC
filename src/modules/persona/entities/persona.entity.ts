import { Entity, Column,PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()   
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;
    @Column()
    nombres: string;
    @Column()
    apellidos: string
    
    @OneToOne(()=>User, user=>user.persona)
    @JoinColumn()
    user: User;
}
