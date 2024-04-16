import { ReactNode, createContext, useEffect, useState } from "react";

type UserIdContextType = {
    userId : string | null,
    fetchUserId : Function;
}

export const UserIdContext = createContext<UserIdContextType | undefined>(undefined);

export const UserIdContextProvider = (props : {children:ReactNode}) => {

    const [userId, setUserId] = useState<string  | null>(null);

    const fetchUserId = () => {
        fetch("auth/session",{
            method:"GET",
            credentials:"include"
        })
        .then( (res) => res.json())
        .then( (json) => {
            if(json.id !== undefined) setUserId(json.id);
            else setUserId(null);
        });  
    }

    useEffect(() => {
          fetchUserId();
    },[]);

    return (
        <UserIdContext.Provider value={{userId,fetchUserId}}>
            {props.children}
        </UserIdContext.Provider>        
            
    );
}