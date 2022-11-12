import { findAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { alfi } from '../data';
import {useParams} from "react-router-dom";
function CoursesDetails() {
    const[singledata , setSingleData]=useState({})
     const{id}=useParams();
    useEffect(()=>{
        // alfi.find((item)=>console.log(item))
      const singledata=alfi.find((item)=>item.id==id)
      setSingleData(singledata);
      console.log(singledata); 
    },[])
  return (
    <>
    <div className="conatiner">
        <div className="card mb-3">
            <h1>CoursesDetails</h1>
         <hr></hr>
         <h1>{singledata.name}</h1>
         <h3>{singledata.desp}</h3>   
        <button className='btn btn-primary '>MoreDeatils</button>
        </div>

    </div>
    </>
  )
}

export default CoursesDetails;