import { getCustomRepository } from "typeorm";
import ClientRepository from "../typeorm/repositories/ClientsRepository";
import AppError from "../../../errors/AppError";

class DeleteClientService {
    public async execute(id: string) {
        const clientRepository = getCustomRepository(ClientRepository)
        const clientExist = await clientRepository.findOne(id)
        // não podemos remover um produto que já exista
        if (!clientExist){
            throw new AppError('Produto não axiste', 400)
        }
        await clientRepository.remove(clientExist)
    }
}
export default DeleteClientService 