import { Column, Entity, JoinColumn, OneToMany, OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Video } from "./Video";

@Entity({name: "tags"})
export class Tag {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    firstName: string;
};


