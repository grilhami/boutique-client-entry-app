interface Config {
    endpoint: string;
    key: string;
}

const cosmosConfig: Config = {
    endpoint: process.env.REACT_APP_COSMOSDB_ENDPOINT as string,
    key: process.env.REACT_APP_COSMOSDB_KEY as string,
}

export default cosmosConfig;