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
        this.router.get(`${this.path}`, this.getClients);
        this.router.post(`${this.path}`, this.createClient);
    }

    getClients = async (req: Request, res: Response) => {
        try {
            const data = await this.service.findTopFiveMostRecent();
            const response: ISuccessResponse = {
                status: "success",
                data
            }
            return res.status(200).json(response)
        } catch (e) {
            const response: IErrorResponse = {
                status: "error",
                message: "Internal Server"
            }
            return res.status(500).json(response)
        }
    }

    createClient = async (req: Request, res: Response) => {
        try {
            const data = await this.service.createClient(req.body);
            const response: ISuccessResponse = {
                status: "success",
                data
            }
            return res.status(200).json(response)
        } catch (e) {
            console.log(e)
            const response: IErrorResponse = {
                status: "error",
                message: "Internal Server"
            }
            return res.status(500).json(response)
        }
    }
}

export default ClientController;