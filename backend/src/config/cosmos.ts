import * as dotenv from "dotenv";
dotenv.config();

interface Config {
    endpoint: string;
    key: string;
}

const cosmosConfig: Config = {
    endpoint: process.env.AZURE_COSMOSDB_ENDPOINT as string,
    key: process.env.AZURE_COSMOSDB_KEY as string,
}

export default cosmosConfig;