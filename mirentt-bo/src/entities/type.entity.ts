import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vehicule } from "./vehicle.entity";

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    type: string;

    @OneToMany(() => Vehicule, (vehicule) => vehicule.type)
    vehicules: Vehicule[];
}