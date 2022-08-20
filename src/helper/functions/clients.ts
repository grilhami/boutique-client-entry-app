import { IClient } from "../db/boutique/clients";

export const mapClients = (clients: IClient[]): IClient[] => {
    clients.forEach((
        client:IClient
        ) => {
            const clientTs: string = client._ts as string;

            const tsToDate = new Date(parseInt(clientTs));

            const clientDate: string = tsToDate.toISOString().split("T")[0];

            client._ts = clientDate;

            return client;
    });
    return clients;
}