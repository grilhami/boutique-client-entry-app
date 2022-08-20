import cosmos from "@azure/cosmos";
import config from "./config";

export const cosmosClient = new cosmos.CosmosClient(config);

