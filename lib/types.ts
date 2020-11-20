import { Collection, /*ObjectId*/ } from "mongodb";

export interface Viewer {
    _id?: string;
    token?: string;
    avatar?: string;
    walletId?: string;
    didRequest: boolean;
}

export interface User {
    _id: string;
    token: string;
    name: string;
    avatar: string;
    contact: string;
    authorized?: boolean;
}

export interface Database {
    users: Collection<User>;
}
  