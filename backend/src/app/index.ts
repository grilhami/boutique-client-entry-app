import express, { Express, Request, Response} from "express";
import APIV1 from "./v1"

const apiV1 = new APIV1();

interface IApp {
    app: Express;
    init(): Express;
}

export default class App implements IApp {
    app: Express;
    constructor(app: Express) {
        this.app = app

        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*'); 
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
            res.setHeader('Access-Control-Allow-Credentials', "true");
            next();
          })

        // Used express build in parser for parsing request body
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

        // register v1
        this.app.use("/api", apiV1.router);

        // Health Checker Endpoint
        this.app.get("/health", (req: Request, res: Response) => res.send("Healthy"));
    }
    public init = () => this.app;
}