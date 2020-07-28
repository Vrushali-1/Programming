import React from 'react'

function Employee({employee}){
    return(
       <React.Fragment>
           <tr><td>{employee.name}</td><td>{employee.job}</td></tr>
       </React.Fragment>
    
    )
}

export default Employee