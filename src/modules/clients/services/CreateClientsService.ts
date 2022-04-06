import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Client from "../typeorm/entities/Client";
import ClientsRepository from "../typeorm/repositories/ClientsRepository";

// vamos criar um tipo de dado -> interface
interface IRequest {
    name: string;
    quantity: number;
    price: number;
}

class CreateClientService {
    // método assíncrono para inserir produto
    public async execute({name, quantity, price}: IRequest): Promise<Client>{
        // obter o repositório
        const clientRepository = getCustomRepository(ClientsRepository)
        const clientExist = await clientRepository.findByName(name);
        // não pode criar produto com nome já existente
        if (clientExist){
            throw new AppError('Já existe produto com este nome', 400)
        }
        // podemos criar
        const novo = clientRepository.create({
            name, quantity, price
        })
        await clientRepository.save(novo)
        return novo
    }
}

export default CreateClientService