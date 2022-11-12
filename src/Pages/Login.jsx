import React from 'react'
import { useContext } from 'react';
import { Contextlogin } from "../App";
import Wrapper from '../Component/Wrapper';
import {useNavigate} from "react-router-dom"
function Login() {
const{setLogin} = useContext(Contextlogin)
const navigate = useNavigate()
function islog(){
    setLogin(true)
    navigate("/courses")
}
  return (
    <>
    <Wrapper>
    <h1>login</h1>
    <button className='btn btn-primary' onClick={islog}>login</button>
    </Wrapper>
    </>
  )
}

export default Login;