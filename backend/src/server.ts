import express,{ Router } from "express";
import App from "./app";
import { serverConfig } from "./config"

const app = express()

interface IServer {
    app: Router;
    start():void;
}

class Server implements IServer {
    app = (new App(app)).init()
    public start = () => 
        this.app.listen(serverConfig.PORT, () => 
            console.log("Server running on port %d", serverConfig.PORT)
        );
}

const server = new Server()
server.start();