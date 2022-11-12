import React from 'react'
import { useContext } from 'react';
import {Link, Navigate} from "react-router-dom"
import {Contextlogin} from "../App"
function Nav() {
  const {login , setLogin} = useContext(Contextlogin)
  function handlelogout(){
    setLogin(false)
    // Navigate("./Login")
    
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addcourses">AddCourses</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/persondetails">Some Employee details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/course">CourseAddingwithapi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewcourse">view all course</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/single">singleform handling</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutcourse">DetailCourse</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/detail-course">view course</Link>
        </li>
        
            {login ? (
              <li>
                 <button onClick={handlelogout}>logout</button>
              </li>
            ) : null}
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav;