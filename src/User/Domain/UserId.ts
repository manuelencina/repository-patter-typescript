export class UserID {

    private userId: string;

    constructor(userId: string) {
        this.verifyIsNotEmpty(userId);
        this.userId = userId;
    }

    private verifyIsNotEmpty(userId: string): void {
        if (userId === "") throw new Error("User Id must not be empty");
    }

    public value(): string {
        return this.userId;
    }
}