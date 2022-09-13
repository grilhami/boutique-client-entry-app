import { IClientGet } from "../api/interfaces";

export const mapClients = (clients: IClientGet[]): IClientGet[] => {
    clients.forEach((
        client:IClientGet
        ) => {
            const clientTs: string = client._ts as string;

            const tsToDate = new Date(parseInt(clientTs));

            const clientDate: string = tsToDate.toISOString().split("T")[0];

            client._ts = clientDate;

            return client;
    });
    return clients;
}