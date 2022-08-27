import ClientRepository from "./client_repository";

interface IClientService {
    repository: ClientRepository;
}

class ClientService implements IClientService {
    repository = new ClientRepository();

    findTopFiveMostRecent = async () => {
        return await this.repository.findClients();
    }
}

export default ClientService;