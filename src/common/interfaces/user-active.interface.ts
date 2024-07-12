import { Role } from "../enums/role.enum";

export interface UserActiveInterface {
    id: string;
    usuario:string;
    // role: string;

    role: Role;

}
