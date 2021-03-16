// PUERTOS

import { User } from "./User";

// Este es el puerto
export interface UserRepository {
    create(user: User): Promise<void>;
}