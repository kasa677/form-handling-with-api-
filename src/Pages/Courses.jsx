import React from 'react'
import { alfi, data } from '../data';
import{Link} from "react-router-dom"
import Wrapper from '../Component/Wrapper';
import { useContext } from 'react';
import { Contextlogin } from '../App';

function Courses() {
    const data = useContext(Contextlogin)
    console.log(data);
    
  return (
    <Wrapper>
    
    <div>
        
        <div className="container">
            <div className="card p-8">
                <h1>our Courses</h1>
                
                <hr></hr>
                
                {
                    
                    alfi.map((item)=>{
                        const{name,id}=item;
                        return(
                            <div className="card mb-3 p-5" key={id}>
                                
                            <h1>{name}</h1>
                            <Link to={`/courses/${id}`}>View</Link>
                            </div>
                            
                                       
                        )
                    })
                    
                    
                }
            </div>
            
        </div>
    </div>
    </Wrapper>

  )
}

export default Courses;