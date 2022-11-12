import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function View() {
  const[updateid , setUpdateid]=useState("")
  const[course , setCourse]=useState({})
  const [formvalue , setFormvalue]=useState({
    coursename:"",
    courseduaration:"",
    courseprice:"",
  });
 
  function setUpdateValue(id , coursename, courseduaration,courseprice){
    console.log(id , coursename , courseduaration , courseprice);
    setFormvalue({
      coursename: coursename , 
      courseduaration: courseduaration,
       courseprice: courseprice})
       setUpdateid(id);
  }
 
  
  //get all course
  function getallcourses(){
    fetch(`https://my-new-project-266bb-default-rtdb.firebaseio.com/course.json`)
    .then((resp)=>resp.json())
    .then((data)=>{
      setCourse(data)
    })
  }
  function updateCourse(e) {
    e.preventDefault();
    fetch(
      `https://my-new-project-266bb-default-rtdb.firebaseio.com/course/${updateid}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(formvalue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        getallcourses();
        
      });
  }
  function handleChange(e){
    const{name , value}=e.target;
    setFormvalue({...formvalue, [name]:value});
  }
  //delete all courses
  function handledelete(id){
    fetch(`https://my-new-project-266bb-default-rtdb.firebaseio.com/course/${id}.json`,{
      method:"Delete"
    })
    .then((data)=>data.json())
    .then((data)=>getallcourses(data));
    //  navigate("/course")
    notify();
  }
  const notify = () => toast("Course hasbeen deleted");
    useEffect(()=>{
     getallcourses()
    
    },[])
console.log(course);
console.log(Object.keys(course));
 const navigate=useNavigate()
 
  
  return (
    <>
   <div className="modal" tabIndex={-1} id="update-course">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form action="">
        <input type="text" 
         placeholder="coursename" 
         className='form-control my-3'
          name="coursename"
          value={formvalue.coursename}
          onChange={handleChange}/>
        <input type="number"
         placeholder="courseduaration"
           className='form-control my-3'
           name="courseduaration"
           value={formvalue.courseduaration}
           onChange={handleChange}/>
        <input type="number"
         placeholder="courseprice"
           className='form-control my-3'
            name="courseprice"
            value={formvalue.courseprice}
            onChange={handleChange}/>
                    <button className='btn btn-primary'  onClick={updateCourse}
                  >Edit</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"onClick={getallcourses}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>

      </div>
    </div>
  </div>
</div>

     
    <h1 className='text-center text-primary'>here you show my all course details</h1>
   <button className='btn btn-primary' onClick={()=>navigate("/course")}>Add Course</button>
   <ToastContainer />
   <table className='table'>
    <thead>
      <tr>
        <th>srno</th>
        <th>coursename</th>
        <th>courseprice</th>
        <th>courseduaration</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {
        Object.keys(course).map((item,index)=>{
          const{coursename , courseprice , courseduaration}=course[item];
          return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{coursename}</td>
              <td>{courseprice}</td>
              <td>{courseduaration}</td>
              <td><button className='btn btn-danger'onClick={()=>handledelete(item)}>Delete</button></td>
              <td>                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#update-course"
                      onClick={() =>
                        setUpdateValue(
                          item,
                          coursename,
                          courseduaration,
                          courseprice
                        )
                      }
                    >
                      Update
                    </button></td>
              
            </tr>
            
            
          )
        })
      }
    </tbody>
   </table>

    </>
  )
}

export default View;