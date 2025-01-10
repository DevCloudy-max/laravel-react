import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/contextProvider";

export default function GuestLayout(){

    const {token}= useStateContext()

    if(token){
        return<Navigate to="/" />
    }
   return (
    <div>
         For Guest User only 
        <Outlet />
    </div>


   ) 
}