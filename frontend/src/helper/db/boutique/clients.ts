import { clientContainer } from ".";
import { mapClients } from "../../functions";

export interface IClient {
    id?: string;
    name: string;
    size: string;
    address: string;
    phone:string;
    _ts?: string;
}



const containerName: string = clientContainer.id;

export const getTopFiveClients = async (): Promise<IClient[]> => {
    const query = `SELECT TOP 5 * FROM ${containerName} ORDER BY ${containerName}._ts DESC`
    const data: IClient[] =  (
        await clientContainer.items.query(query).fetchAll()
    ).resources;
    
    const clients: IClient[] = mapClients(data);
    return clients;
}