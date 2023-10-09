import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    let auth = localStorage.getItem("user");
    if (auth !== null){
        auth == JSON.parse(auth)
    }
    return auth ? <Outlet></Outlet> : <Navigate to="/login"></Navigate> 
};

export default AuthGuard;