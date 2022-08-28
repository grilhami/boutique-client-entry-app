import cosmos from "@azure/cosmos";
import { cosmosClient } from "../../../database/cosmos";
import { mapClient, mapClients, generateNextId } from "../../../shared/functions/client";
import { IClient } from "../../../shared/interfaces/client";

interface IClientRepository {
    container: cosmos.Container;
    // findUserById(id: string): Promise<User>
}

class ClientRepository implements IClientRepository {
    container = cosmosClient
            .database("boutique")
            .container("clients");

    find = async (limit: number = 5) => {
        const query: string = `SELECT TOP 
                                ${limit} * FROM 
                                ${this.container.id} ORDER BY 
                                ${this.container.id}._ts DESC`

        const data: IClient[] = (
            await this.container.items.query(query).fetchAll()
        ).resources;

        const clients: IClient[] = mapClients(data);
        return clients;
    }

    findOneLatest = async () => {
        const query: string = `SELECT TOP 1 * FROM 
                                ${this.container.id} ORDER BY 
                                ${this.container.id}._ts DESC`

        const data: IClient = (
            await this.container.items.query(query).fetchAll()
        ).resources[0];

        const clients: IClient = mapClient(data);
        return clients;
    }

    create = async (data: IClient) => {
        const lastClientId: string = (
            await this.findOneLatest()
        ).id as string;

        const id: string = generateNextId(lastClientId);

        const client: IClient = {
            id,
            name: data.name,
            size: data.size,
            address: data.address,
            phone: data.phone
        }

        const createClient = await this.container.items.create(client);
        return createClient.resource;

    }
}

export default ClientRepository;