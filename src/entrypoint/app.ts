import express, { Router } from "express";
import dotenv from "dotenv";
import compress from "compression";
import helmet from "helmet";

import { UserPostController } from './controllers/users/UserPostController';
import { UserCreator } from "../User/Application/create/UserCreator";
import { PostgresSQLUserRepository } from "../User/Infrastructure/Persistence/PostgresSQLUserRepository";

dotenv.config();

if (!process.env.PORT) process.exit(1);

const port: number = parseInt(process.env.PORT, 10);
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compress());

// AHORA VIENE LO BUENO CABRITOOOO AYAYAYAYYA

const postreSqlUserRepository = PostgresSQLUserRepository.generateUserRepository();
const userCreator = UserCreator.generateUserCreator(postreSqlUserRepository)
const postUserController = UserPostController.generateUserPostController(userCreator);

app.post("/signup", postUserController.save);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});