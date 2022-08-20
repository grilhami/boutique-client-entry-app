interface Config {
    endpoint: string;
    key: string;
}

const cosmosConfig: Config = {
    endpoint: process.env.ENDPOINT as string,
    key: process.env.KEY as string,
}

export default cosmosConfig;