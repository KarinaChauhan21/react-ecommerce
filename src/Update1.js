import React from 'react';
class Update1 extends React.Component{
    constructor(){
        super();
        this.state={
            no:1,
        }
       

    }

    update(){
        this.setState({
            no:this.state.no+1
    })
    }
render(){
    return(
        <div>
        <p>{this.state.no}</p>
        <button onClick={()=>{this.update()}}>click me</button>
        </div>
        
    )
}

}

export default Update1;