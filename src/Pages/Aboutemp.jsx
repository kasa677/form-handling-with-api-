import React from 'react'
import { useState } from 'react';

function Aboutemp() {
  const[formvalue , setFormvalue]=useState({
  
    firstname:"",
    address:"",
    phoneno:""

  })
  const[tableData , setTableData]=useState([])
  function handleChange(e){
    const{ name , value}=e.target;
    setFormvalue({...formvalue , [name]:value})
  }
   function handleSubmit(e){
    e.preventDefault();
    setTableData([...tableData, formvalue]);
    console.log(formvalue);
    setFormvalue({ firstname: "", address: "", phoneno: "" });
   }
  return (
    <>
    <h1 className='text text-center text-primary'>my friend about details</h1>
    <div className="row">
    <div className="col-md-9 p-3 offset-md-3 shadow">
        <form action="">
            <div className='my-5'>
            <input type="text"
             placeholder='kindly please set your first name'
             value={formvalue.firstname}
             name="firstname"
             onChange={handleChange} />
            </div>
            <div className='my-5'>
            <input type="text"
             placeholder='kindly please set your address'
             value={formvalue.address}
             name="address"
             onChange={handleChange} />
            

            </div>
            <div className='my-5'>
            <input type="number"
             placeholder='kindly please set phone number' 
             value={formvalue.phoneno}
             name="phoneno"
             onChange={handleChange}/>
             </div>
            <button className='btn btn-primary'onClick={handleSubmit}>Submit this form</button>
        </form>
        <table className='table table-primary'>
          <thead>
            <tr>
              <th>sr no</th>
              <th>firstname</th>
              <th>address</th>
              <th>phoneno</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((item, index)=>{
                const{firstname , address , phoneno}=item;
                console.log(item);
                return(
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{firstname}</td>
                    <td>{address}</td>
                    <td>{phoneno}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


    </div>
    </div>
    </>
  )
}

export default Aboutemp;