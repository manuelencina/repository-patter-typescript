import { UserRepository } from "../../Domain/UserRepository";
import { User } from "../../Domain/User";

export class UserCreator {

    private constructor(
        private readonly userRepository: UserRepository
    ) {}

    public async createUser(id: string, email: string, password: string): Promise<void> {
        try {
            const user: User = User.createUser(id, email, password);
            await this.userRepository.create(user);
        } catch (error) {
            throw error;
        }
    }

    public static generateUserCreator(userRepository: UserRepository): UserCreator{
        return new UserCreator(userRepository);
    }
}