import { clientContainer } from ".";
import { Container, FeedResponse } from "@azure/cosmos";

const containerName: string = clientContainer.id;

export const getTopFiveClients = () => {
    const query = `SELECT TOP 5 * FROM ${containerName} ORDER BY ${containerName}._ts DESC`
    return clientContainer.items.query(query).fetchAll();
}