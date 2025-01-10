import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/contextProvider";
export default function DefaultLayout(){

    const{user,token}= useStateContext()
    if(!token){
        return<Navigate to="/login" />
    }
return(
    <div>
        For default User only 
        <Outlet/>
    </div>
)
} 