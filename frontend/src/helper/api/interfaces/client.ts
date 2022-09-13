export interface IClientGet {
    id: string;
    name: string;
    size: string;
    address: string;
    phone: string;
    _ts: string;
}

export interface IClientPost {
    name: string;
    size: string;
    address: string;
    phone: string;
}

export interface IClientItem extends IClientGet {
    key: string;
}