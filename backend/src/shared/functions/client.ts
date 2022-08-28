import { IClient } from "../interfaces/client";

export const mapClients = (clients: IClient[]): IClient[] => {
    const data: IClient[] = clients.map((
        client:IClient
        ) => {
            const clientTs: string = client._ts as string;

            const tsToDate = new Date(parseInt(clientTs));

            const clientDate: string = tsToDate.toISOString().split("T")[0];

            const data: IClient = {
                id: client.id,
                name: client.name,
                size: client.size,
                address: client.address,
                phone: client.phone,
                _ts: clientDate
            }
            return data;
    });
    return data;
}

export const mapClient = (client: IClient): IClient => {
    const clientTs: string = client._ts as string;

    const tsToDate = new Date(parseInt(clientTs));

    const clientDate: string = tsToDate.toISOString().split("T")[0];

    const data: IClient = {
        id: client.id,
        name: client.name,
        size: client.size,
        address: client.address,
        phone: client.phone,
        _ts: clientDate
    }
    return data;
}

export const generateNextId = (id: string) => {
    const idNumber: string = id.replace("client", "");
    const nextId: string = "client" + (parseInt(idNumber) + 1);
    return nextId
}