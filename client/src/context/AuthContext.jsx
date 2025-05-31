import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../service/UserService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isauth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    function login(email, password) {
        try {
            userService.authenticate(email, password);
            setIsAuth(true);
            navigate("/Dev");
            // Basic browser alert instead of Swal
            window.alert("Successfully Logged in");
        } catch (error) {
            window.alert(`Invalid: ${error.message}`);
        }
    }

    function logout() {
        setIsAuth(false);
        navigate("/pages/Login");
        window.alert("Successfully Logged out");
    }

    function register(email, password) {
        try {
            userService.adduser(email, password);
            setIsAuth(true);
            navigate("/pages/Home");
            window.alert("Successfully Registered & Logged in");
        } catch (error) {
            window.alert(`Invalid: ${error.message}`);
        }
    }

    return (
        <AuthContext.Provider value={{ isauth, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

