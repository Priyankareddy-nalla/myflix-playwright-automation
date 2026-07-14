export class LoginPage {

    constructor(page) {
        this.page = page;


        this.usernameInput = page.getByLabel('Username:');
        this.passwordInput = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', {name : 'Login'});
}

async goto(){
    await this.page.goto('http://localhost:1234/login');
}


async login(username , password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
}