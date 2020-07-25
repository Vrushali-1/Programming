import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super();
        this.state={
            message:"welcome Visitor.."
        }
    }

    changeMessage(){
        this.setState({
            message:"hi visitor..."
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>click me!</button>
            </div>
        )
    }
}

export default Message