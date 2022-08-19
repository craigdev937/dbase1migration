import { Column, Entity, OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./Channel";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    firstName: string;

    @Column({ unique: true }) 
    email: string;

    @OneToOne(() => Channel, (channel) => channel.user)
    channel: Channel;
};


