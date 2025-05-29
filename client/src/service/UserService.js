class UserService {
    constructor() {
        let data = localStorage.getItem("db");
        if (data === null) {
            data = { users: [] };
            localStorage.setItem("db", JSON.stringify(data));
            this.db = data;  
        } else {
            this.db = JSON.parse(data);  
        }
    }

    adduser(email, password) {
        if (this.db.users.find((obj) => obj.email === email)) {
            throw new Error("User already exists");
        } else {
            this.db.users.push({ email, password });  
            localStorage.setItem("db", JSON.stringify(this.db));
        }
    }

    authenticate(email, password) {
        let user = this.db.users.find((obj) => obj.email === email);  
        if (user) {
            if (user.password === password) {
                return true;
            } else {
                throw new Error("Invalid password");
            }
        }
        return false;  
    }
}

const userService = new UserService();
export default userService;