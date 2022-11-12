import React from 'react'
import { useState } from 'react';

function Form() {
    const[firstname , setFirstName]=useState("")
    const[table , setTable]=useState([]);
    function handleChange(e){
        setFirstName(e.target.value);
        
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(firstname)
        setTable([...table , firstname])
        setFirstName("");

    }
  return (
    <>
    <form action="">
        <input type="text"
         name="firstname"
          placeholder='firstname'
          value={firstname}
          onChange={handleChange} />
          <button className='btn-primary'onClick={handleSubmit}>Submit</button>
    </form>
    <table className='table-primary'>
        <thead>
            <tr>firstName</tr>
        </thead>
        <tbody>
            {
                table.map((item, index)=>{
                
                    return(
                    <tr key={index}>
                    <th>{index+1}</th>
                    <th>{item}</th>
                </tr>
                )
                })
            }
            
           
        </tbody>
    </table>
    </>
  )
}

export default Form;