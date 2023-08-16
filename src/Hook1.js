import React, {useState,useEffect} from 'react';

function Hook1(){
    const[data,setData]=useState(1);
    const[count,setCount]=useState("hii my name is kareena");
    const[update,setUpdate]=useState(1);

    useEffect( ()=>{
        console.log("this is my useEffect");

    })
    return(

    <div>
        <h1>this is my first heading</h1>
        <p>{data}</p>
        <p>{count}</p>
        <p>{update}</p>
        <button onClick={()=>{setData(data+1)}} >click me</button>
        <button onClick={()=>{setCount("hello i am a student")}}>click this</button>
        <button onClick={()=>{setUpdate(update-1)}}>click to decrease</button>

    </div>
    )
}

export default Hook1;