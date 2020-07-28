import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table'


function EmployeeList(){
   
    const employees=[ 
       {
           name:'Charlie',
           job:'Janitor'
       },
       
       {
        name:'Mac',
        job:'Bouncer'
       },
       
       {
        name:'Dee',
        job:'Aspiring actress'
       },

       {
        name:'Dennis',
        job:'Bartender'
       }
    ]

    const employeeList=employees.map(employee =>  <Employee employee={employee}/>  )
   
    return(
            <div>

                <Table striped bordered>
                       <thead>
                       <tr>
                       <th>Name</th><th>Job</th>
                       </tr>
                       </thead>
                       <tbody>
                       {employeeList} 
                       </tbody>
                       
                
                </Table>
             </div>
     )
}

export default EmployeeList