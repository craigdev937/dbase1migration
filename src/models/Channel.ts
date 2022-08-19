import { Column, Entity, JoinColumn, OneToMany, OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Video } from "./Video";

@Entity({name: "channel"})
export class Channel {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    firstName: string;

    @OneToOne(() => User, (user) => user.channel)
    @JoinColumn()
    user: User;

    @OneToMany(() => Video, (video) => video.channel)
    videos: Video[];
};


