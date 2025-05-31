import {createContext,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import userService from '../service/UserService'
import * as Swal from "sweetalert2";

const AuthContext = createContext();
export function AuthProvider({children}){
    const [isauth,setIsAuth] = useState(false);
    const navigate = useNavigate();
    function login(email,password){
       try{
        userService.authenticate(email,password);
        setIsAuth(true);
        navigate('/Dev');
        Swal.fire(
            {
                title:"Successfull",
                text:"Successfully Logged in",
                icon:"🙌"
            }
        );
       }
       catch(error){
        Swal.fire({
            title: "Invalid",
				text: error.message,
				icon: "error"
        });
       }
    }
    function logout(){
        setIsAuth(false);
        navigate('/pages/Login');
        Swal.fire(
            {
                title:"Successfull",
                text:"Successfully Logged out",
                icon:"🙌"
            }
        );
    }
    function register(email,password){
        try{
            userService.adduser(email,password);
            setIsAuth(true);
            navigate('/pages/Home');
            Swal.fire(
                {
                    title:"Successfull",
                    text:"Successfully Logged in",
                    icon:"🙌"
                }
            );
           }
           catch(error){
            Swal.fire({
                title: "Invalid",
                    text: error.message,
                    icon: "error"
            });
           }
    }
    return(
        <AuthContext.Provider value={{isauth,login,logout,register}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
