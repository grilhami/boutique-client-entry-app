import {CosmosClient} from "@azure/cosmos";
import config from "./config";
export const cosmosClient = new CosmosClient(config);