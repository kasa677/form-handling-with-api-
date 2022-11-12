import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom"
function Course() {

    const[formvalue , setFormvalue]=useState({
        coursename:"",
        courseduaration:"",
        courseprice:""
        
    });
    const navigate=useNavigate()

    function handlechange(e){
        // console.log(e.target.name , e.target.value)
        const{name , value}=e.target;
        setFormvalue({...formvalue ,[name]:value})
           
    }
    function handlesubmit(e){
        e.preventDefault();
        console.log(formvalue);
        fetch(`https://my-new-project-266bb-default-rtdb.firebaseio.com/course.json`,{
            method:"POST",
            body:JSON.stringify(formvalue),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data);
            navigate("/viewcourse")
        })
        notify();
       
    }
    const notify = () => toast("Course hasbeen added");
  return (
    <>
    <h1 className='text-primary text-center'>you can add some employee details</h1>
    <div className="row">
    <div className="col-md-6 p-3 offset-md-3 shadow">
    <ToastContainer />
        <form action="">
            <h3>Add details</h3>
            <div className='my-5'>
                <input type="text"
                 className='form-control'
                 placeholder='coursename'
                  value={formvalue.coursename}
                  name="coursename"
                  onChange={handlechange}
                />
            </div>
            <div className='my-5'>
                <input type="number"
                 className='form-control'
                 placeholder='courseduaration'
                  value={formvalue.courseduaration}
                  name="courseduaration"
                  onChange={handlechange}/>
            </div>
            <div className='my-5'>
                <input type="number"
                 className='form-control'
                 placeholder='courseprice'
                 value={formvalue.courseprice}
                 name="courseprice"
                 onChange={handlechange}/>
                 
            </div>
            <button className='btn btn-primary'onClick={handlesubmit}>Add course</button>
            <li className="nav-item">
          <Link className="nav-link btn btn-primary" to="/viewcourse">Go to all course</Link>
        </li>
        </form>
    </div>
    </div>
     </>
  )
}
export default Course;