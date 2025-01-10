
import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext({
    User: null,
    token: null,
    setUSer: () => {},
    setToken: () => {}
})

export const ContextProvider = ({ children }) => {


    const [user, setUser] = useState({});
    const [token, _setToken] = userState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }


    return (
        < StateContext.Provider value={{

            User,
            token,
            setUSer,
            setToken

        }}>
            {children}
        </StateContext.Provider >
    )

}

export const useStateContext = () => useContext(StateContext)