import { Column, Entity, JoinTable, ManyToMany, ManyToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./Channel";
import { Tag } from "./Tag";

@Entity()
export class Video {
    @PrimaryGeneratedColumn() id: number;
    @Column() title: string;

    @ManyToOne(() => Channel, (channel) => channel.videos)
    channel: Channel;

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];
};


