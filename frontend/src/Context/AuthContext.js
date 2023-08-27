import { createContext, useReducer } from "react";


export const AuthContext = createContext();

const InitialState = {user:null};

const reducer = (state,action) => {
    switch (action.type) {
        case "Login":
            return {...state,user:action.payload}
        case "Logout":
            return {...state, user:null}
    
        default:
            return state;
    }
}


const HandleAuthContext = ({children})=>{

    const [state,dispatch] = useReducer(reducer, InitialState);
    return (
        <AuthContext.Provider value={{state,dispatch}} > 
        {children}
        </AuthContext.Provider>
    )
} 

export default HandleAuthContext;
