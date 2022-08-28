import { IClient } from "../../../shared/interfaces/client";
import ClientRepository from "./client_repository";

interface IClientService {
    repository: ClientRepository;
}

class ClientService implements IClientService {
    repository = new ClientRepository();

    findTopFiveMostRecent = async () => {
        return await this.repository.find();
    }

    createClient = async (data: IClient) => {
        return await this.repository.create(data);
    }
}

export default ClientService;