import {Route, Routes} from 'react-router-dom';
import BasicLayouts from '../layouts/BasicLayouts';
import Home from '../pages/Home';
import About from '../pages/About';
import Dev from '../pages/Dev';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Register from '../pages/Register';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/"
                element={<BasicLayouts/>}>
                <Route index
                    element={<About/>}/>
                <Route path="/Register"
                    element={<Register/>}/>
                <Route path="/Login"
                    element={<Login/>}/>
                <Route path="/Logout"
                    element={<Logout/>}/>
                <Route path="/Dev"
                    element={<Dev/>}/>
            </Route>
        </Routes>
    );
}
