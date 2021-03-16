import { UserEmail } from "./UserEmail";
import { UserPassword } from "./UserPassword";
import { UserID } from "./UserId";

export class User {

    private userId: UserID;
    private userEmail: UserEmail;
    private userPassword: UserPassword;

    private constructor(userId: string, userEmail: string, userPassword: string) {
        try {
            const userIdVO: UserID = new UserID(userId);
            const userEmailVO: UserEmail = new UserEmail(userEmail);
            const userPasswordVO: UserPassword = new UserPassword(userPassword);

            this.userId = userIdVO;
            this.userEmail = userEmailVO;
            this.userPassword = userPasswordVO;

        } catch (error) {
            throw error;
        }
    }

    public static createUser(userId: string, userEmail: string, userPassword: string): User {
        const newUser: User = new User(userId, userEmail, userPassword);
        return newUser;
    }

    public id(): string {
        return this.userId.value();
    }

    public password(): string {
        return this.userPassword.value();
    }

    public email(): string {
        return this.userEmail.value();
    }
}