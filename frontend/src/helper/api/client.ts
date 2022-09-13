import { getAxiosInstance } from ".";
import { IClientGet, IClientPost } from "./interfaces";

export const getClients = async () => {
  const api = getAxiosInstance()
  const response = await api.get("api/v1/clients");
  const data: IClientGet[] = response.data.data;
  return data;
};

export const createClient = async (payload: IClientPost) => {
  const api = getAxiosInstance()
  const response = await api.post("/clients", payload);
  return response;
};