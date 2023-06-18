class UserLogin {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;

    constructor(email: string, username: string, password: string, confirmPassword: string) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

export default UserLogin;
