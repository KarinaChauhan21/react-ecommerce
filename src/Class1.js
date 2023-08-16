import React from 'react';
class Class1 extends React.Component{
  constructor(){
   super();
 
   this.state={
    data:"kareena",
    enter:"yes",

   }
}
    
render(){
    return(
        <div>
            <h1>heading</h1>
            <h2>hello this is my class component</h2>
            <p>{this.state.data} {this.state.enter}</p>
            <p>{this.props.m} {this.props.s}</p>
           
        </div>
        )
}

}

export default Class1;