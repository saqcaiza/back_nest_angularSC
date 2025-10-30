import {Cliente} from "../../cliente/entities/cliente.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidoProducto } from './pedidoproducto.entity';

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    estado: number;

    @Column()
    observaciones: string;

    @ManyToOne(() => Cliente)  
    cliente: Cliente;

    @OneToMany(()=>PedidoProducto,pedprod=>pedprod.pedido)
    pedidoProducto: PedidoProducto[];
}