import * as dotenv from "dotenv";
dotenv.config();


export const serverConfig = Object.freeze({
    PORT: process.env.PORT || 8080,
    SERVER_NAME: process.env.SERVER_NAME || "Boutique Client Entry App Express" ,
    BASE_REST_API_PATH: process.env.DEFAULT_BASE_API_PATH || "/api", 
    SECRET: process.env.DEFAULT_SECRET 
        ? process.env.DEFAULT_SECRET 
        : ""
});
