import React, { createContext, useState } from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {Routes , Route} from "react-router-dom"
import Nav from './Component/Nav';
import Courses from './Pages/Courses';
import CoursesDetails from './Pages/CoursesDetails';
import AddCourses from "./Pages/AddCourses"
import Private from './Component/Private';
import Login from './Pages/Login';
import Persondetails from './Pages/Persondetails';
import Course from './Pages/Course';
import View from './Pages/View';
import Aboutemp from './Pages/Aboutemp';
import Form from './Pages/Form';
import Detailcourse from './Pages/Detailcourse';
export const Contextlogin = createContext()

function App() {
  const [login , setLogin] = useState(false)
  return (
    <>
    <Contextlogin.Provider value={{login , setLogin}}>
      <Nav/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="about" element={<Private><About/></Private>}/>
      <Route path="contact" element={<Private><Contact/></Private>}/>
      <Route path="courses" element={<Private><Courses/></Private>}/>
      <Route path="courses/:id" element={<Private><CoursesDetails/></Private>}/>
      <Route path="addcourses" element={<Private><AddCourses/></Private>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="persondetails" element={<Persondetails/>}/>
      <Route path ="course" element={<Course/>}/>
      <Route path ="viewcourse" element={<View/>}/>
      <Route path = "aboutcourse" element={<Aboutemp/>}/>
      <Route path ="single" element={<Form/>}/>
      <Route path ="aboutcourse/:id" element={<Detailcourse/>}/>
     </Routes>
     </Contextlogin.Provider>
    </>
  )
}

export default App;