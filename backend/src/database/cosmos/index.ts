import {CosmosClient} from "@azure/cosmos";
import config from "../../config/cosmos";
export const cosmosClient = new CosmosClient(config);