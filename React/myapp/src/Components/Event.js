import React from 'react'

function Event(){

    onChange(){
        console.log("Clicked!!!")
    }
    return(
        <div>
            <button onClick={this.onChange}>Click Me</button>
        </div>
    )
}

export default Event