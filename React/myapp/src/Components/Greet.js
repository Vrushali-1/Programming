import React from 'react'


const Greet=(props) => {
return(
     
    <div>
    <h1>{props.name} here..</h1>
    {props.children}
    </div>
)}


export default Greet