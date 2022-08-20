import { cosmosClient } from "..";
export const clientContainer = cosmosClient
                                .database("boutique")
                                .container("clients");