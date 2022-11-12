import React from 'react'
import { useState } from 'react';
import Wrapper from '../Component/Wrapper';

function Persondetails() {
  const[fname , setfName] = useState("")
  const[lname , setlName] = useState("")
  const[email , setEmail] = useState("")
  const[address , setAddress] = useState("")
  const[monumber , setMonumber] = useState("")
    const[tabledata , setTabledata]=useState([])
   

   
  function handleSubmit(e){
    const formValue ={ 
      fname,
      lname,
      address,
      email,
      monumber,
     }
    // / console.log(formValue)
   
       setTabledata([...tabledata , formValue]);
    
    
    e.preventDefault();
    setfName("");
    setlName("");
    setEmail("");
    setAddress("");
    setMonumber("")
    
  }
  return (
    <>
    <Wrapper>
      <h1 className='text-center'>Here is some information my Employee</h1>
      <form for="action">
        <h1>Person data:</h1>
        
        <input type="text" id="fname"
            className='form-control'
            placeholder='fname'
             value={fname}
             onChange={(e)=>setfName(e.target.value)}/>
              
        <input type="text" id="lname"
            className='form-control'
            placeholder='lname'
             value={lname}
             onChange={(e)=>setlName(e.target.value)}/>
              
        <input type="text" id="e-mail"
            className='form-control'
            placeholder='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}/>
              
        <input type="text" id="address"
            className='form-control'
            placeholder='address'
             value={address}
             onChange={(e)=>setAddress(e.target.value)}/>
              
        <input type="text" id="monumber"
            className='form-control'
            placeholder='monumber'
             value={monumber}
             onChange={(e)=>setMonumber(e.target.value)}/>
               {
        tabledata.map((item , index)=>{
          const{fname , lname ,email , address}=item;
          return(
            <table key = {index+1}>
              <thead>
                <tr>
                  <td>SR no</td>
                  <td>firstname</td>
                  <td>lastname</td>
                  <td>email</td>
                  <td>addrees</td>
                
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{index}</th>
                  <th>{fname}</th>
                  <th>{lname}</th>
                  <th>{email}</th>
                  <th>{address}</th>
                </tr>
              </tbody>
            </table>
            
          )
        })
      }
             
      </form>
    
      <button className='btn btn-primary' onClick={handleSubmit}>SubmitNow</button>
      
    </Wrapper>
    </>
  )
}

export default Persondetails;