import { Request, Response } from "express";

import { UserCreator } from "../../../User/Application/create/UserCreator";

export class UserPostController {

    private constructor(
        private readonly userCreator: UserCreator
    ) {
        this.save = this.save.bind(this);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        try {
            const { id, email, password } = req.body;
            await this.userCreator.createUser(id, email, password);
            return res.status(201).json({
                "message": "created user"
            });
        } catch (error) {
            return res.status(500).json({
                "err": error.message,
            });
        }
    }

    public static generateUserPostController(userCreator: UserCreator): UserPostController {
        return new UserPostController(userCreator);
    }
}