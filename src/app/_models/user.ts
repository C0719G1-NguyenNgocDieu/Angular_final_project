import {Role} from "./role";

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: number;
    address: string;
    role: Role;
}
