import React from 'react';

class Class2 extends React.Component{

    constructor(){
        super();
        this.state={
            no:0,
        }

        
    }

    update(){
        this.setState({
            no:this.state.no-1
        }

        )
    }
    render(){

        return(
<div>
    
<h1>hello this is my first heading</h1>
        <p>{this.state.no}</p>
        <button onClick={()=>{this.update()}} >click me</button>
</div>
    )}
}

export default Class2;