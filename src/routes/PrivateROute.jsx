import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateROute = ({children}) => {

    const {isLoading , user} = useAuth();

    if(isLoading){
        return <div className="progress w-full"></div>
    }

    if(!isLoading && !user?.email){
        return <Navigate to='/login'></Navigate>
    }



    return children;
};

export default PrivateROute;