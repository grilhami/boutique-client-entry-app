import { Request, Response, Router } from "express";
import { IController, IErrorResponse, ISuccessResponse } from "../../../shared/interfaces";
import ClientService from "./client_service";

class ClientController implements IController {
    path = "/clients"
    router = Router();
    service = new ClientService();

    constructor() {
        this.initRoute();
    }

    initRoute = () => {
        this.router.post(`${this.path}`, this.getClients);
    }

    getClients = async (req: Request, res: Response) => {
        try {
            const data = await this.service.findTopFiveMostRecent();
            const response: ISuccessResponse = {
                status: "success",
                data
            }
            return res.status(201).json(response)
        } catch (e) {
            const response: IErrorResponse = {
                status: "error",
                message: "Internal Server"
            }
            return res.status(500).json(response)
        }
    }
}

export default ClientController;