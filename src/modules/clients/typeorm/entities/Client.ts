import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

// vamos decorar a classe
@Entity('client')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column('decimal')
    price: number
    @Column('int')
    quantity: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

}
export default Client