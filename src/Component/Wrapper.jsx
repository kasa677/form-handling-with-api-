import React from 'react'

function Wrapper({children}) {
  
  return (
    <div className="container-fluid">
      <div className="container">
            {children}      
      </div>
    </div>
  )
}

export default Wrapper;