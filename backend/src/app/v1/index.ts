import express from 'express';
import { IController } from '../../shared/interfaces';
import ClientController from "./clients/client_controller";

interface V1 {
    _c: IController[];
    path: string;
    router: express.Router;
}

export default class APIV1 implements V1 {
	path = "/v1";
	router = express.Router();

	// Arrays of controllers
	_c = [ 
		new ClientController()
	 ];

	constructor() {
		this.initController(this._c);
	}

	initController = (_c: IController[]) => {
		_c.forEach((controller) => {
			this.router.use(
                this.path, 
                controller.router
            );
		});
	};
}