
import { children, createContext, useContext, useState } from "react";

const StateContext = createContext({
    User: null,
    token: null,
    setUSer: () => {},
    setToken: () => {}
})

export const ContextProvider = ({ children }) => {


    const [user, setUser] = useState({
        name: 'jay'
    });
    const [token, _setToken] = useState(null);

    const setToken = (newToken) => {
        _setToken(newToken)
        if (newToken) {
            localStorage.setItem("ACCESS_TOKEN", newToken);
        }
        else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }


    return (
        < StateContext.Provider value={{

            user,
            token,
            setUser,
            setToken

        }}>
            {children}
        </StateContext.Provider >
    )

}

export const useStateContext = () => useContext(StateContext)