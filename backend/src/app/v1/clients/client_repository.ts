import cosmos from "@azure/cosmos";
import { cosmosClient } from "../../../database/cosmos";
import { IClient } from "../../../shared/interfaces/client";

interface IClientRepository {
    container: cosmos.Container;
    // findUserById(id: string): Promise<User>
}

class ClientRepository implements IClientRepository {
    container = cosmosClient
            .database("boutique")
            .container("clients");

    findClients = async (limit: number = 5) => {
        const query: string = `SELECT TOP 
                                ${limit} * FROM 
                                ${this.container.id} ORDER BY 
                                ${this.container.id}._ts DESC`

        const data: IClient[] = (
            await this.container.items.query(query).fetchAll()
        ).resources;

        return data;
    }
}

export default ClientRepository;