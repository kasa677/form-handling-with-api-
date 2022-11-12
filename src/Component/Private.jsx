import React from 'react'
import { useContext } from 'react';
import {Contextlogin} from "../App"
import {Navigate} from "react-router-dom"
function Private({children}) {
    
    const{login} = useContext(Contextlogin);
    if(login){
        return children;
    }else{
        return <Navigate to="/login"/>
    }
}

export default Private;