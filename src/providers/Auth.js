import { createContext, useEffect, useState, useContext  } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => { 

    const userStorage = localStorage.getItem("user");
    
    const [user, setUser] = useState();
    
    useEffect(() => {
        
         
          
        if (userStorage) {

            setUser(JSON.parse(userStorage));
        }
         

    }, []);
    
    return(
        <AuthContext.Provider value ={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);