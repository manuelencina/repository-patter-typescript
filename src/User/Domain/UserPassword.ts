export class UserPassword {

    private userPassword: string;

    constructor(password: string) {
        this.isNotEmpty(password);
        this.verifyPasswordLength(password);
        this.verifyOneDigit(password);
        this.verifyOneSpecialCharacter(password);
        this.userPassword = password;
    }

    private isNotEmpty(password: string): void {
        if (password === "" || password.length === 0) {
            throw new Error("The password field must not be empty");
        }
    }

    private verifyPasswordLength(password: string): void {
        if (password.length < 8) {
            throw new Error("The user password field must be at least 8 characters long")
        }
    }

    private verifyOneDigit(password: string): void {
        const regexp = /\d/
        if (!password.match(regexp)) {
            throw new Error("The user password field must have at least one digit")
        }
    }

    private verifyOneSpecialCharacter(password: string): void {
        const regexp = /[\W_]/
        if (!password.match(regexp) ) {
            throw new Error("The user password field must have at least one special character");
        }
    }

    public value(): string {
        return this.userPassword;
    }
}