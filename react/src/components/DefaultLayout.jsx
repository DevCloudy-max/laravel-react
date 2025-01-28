import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import axiosclient from "../axios-client";
export default function DefaultLayout(){

    const{user,token,notification,setUser,setToken}= useStateContext()
  
    if(!token){
        return<Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosclient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
        })
    }

return(
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>    
        </aside> 
        <div className="content">
            <header>
                <div>
                    Header
                </div>
                <div>
                   {user.name}
                   <a className="btn-logout" href="#" onClick={onLogout}>Logout</a>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
              {notification &&
          <div className="notification">
            {notification}
          </div>
}
        </div>
    </div>
)
} 