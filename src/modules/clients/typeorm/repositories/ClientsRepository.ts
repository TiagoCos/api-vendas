
import { Repository, EntityRepository } from "typeorm";
import Client from "../entities/Client"

@EntityRepository(Client)
class ClientRepository extends Repository<Client>{
    // podemos adicionar novos métodos
    public async findByName(name: string): Promise< Client | undefined>{
        let client = await this.findOne({
            where: {
                name
            }
        })
        return client
    }
}
export default ClientRepository