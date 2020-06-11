import { Role } from './role';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    rolesManejados: Role[];
    idEntidad : number;
    token?: string;
    documento: string;
	descDistrito: string;
	numDistrito: number;
	tipo_org: string;
	dependencia: string;
	escuela: number; 
	reg: string;
}
