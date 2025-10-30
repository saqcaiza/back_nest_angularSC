import { Entity, Column, PrimaryGeneratedColumn,OneToOne } from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
   id: number;
    @Column()
   name: string;
   @Column()
    email: string;
    @Column()   
    password: string;

    @OneToOne(() => Persona, persona => persona.user,{cascade:true})
    persona: Persona;

}
