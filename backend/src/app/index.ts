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