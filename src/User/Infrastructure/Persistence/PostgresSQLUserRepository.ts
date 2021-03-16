import bcrypt from "bcrypt";

import { pool } from "../../../Shared/Infrastructure/Persistence/postgreSQL/database";
import { User } from "../../Domain/User";
import { UserRepository } from "../../Domain/UserRepository";

// Esta es el adaptador (implementación de la interfáz)
export class PostgresSQLUserRepository implements UserRepository {

    private constructor() {};
    
    public async create(user: User): Promise<void> {
        try {
            const hashPwd: string = await bcrypt.hash(user.password(), 10);
            await pool.query('INSER INTO users (id, email, password) VALUES ($1, $2, $3)', [user.id(), user.email(), hashPwd]);
        } catch (error) {
            throw error;
        }
    }

    public static generateUserRepository(): PostgresSQLUserRepository {
        return new PostgresSQLUserRepository();
    }
}