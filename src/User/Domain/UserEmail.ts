export class UserEmail {

    private userEmail: string;

    constructor(userEmail: string) {
        this.verifyIsNotEmpty(userEmail);
        this.userEmail = userEmail;
    }

    private verifyIsNotEmpty(email: string): void {
        if (email === "" || email.length === 0) {
            throw new Error("The email field must not be empty");
        }
    }

    public value(): string {
        return this.userEmail;
    }
}