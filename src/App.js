import React from 'react';
import './App.css';
import{Route,Routes} from 'react-router'


// import Home from './Home';
// import About1 from './About1';
// import New from './New';
// import Class1 from './Class1';
// import Update1 from './Update1';
// import Hook1 from './Hook1';
// import Class2 from './Class2';
// import Component from './Component';
import Navbar1 from './Component/Navbar1';
import Home from './Component/Home';
import Products from './Component/Products';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import Services from './Component/Services';
// import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      {/* <Home desc="This is props text from app js file"
      email="futurefinder123@gmail.com"
      />
    <About1
    txt="hello i am prop kjldklk dkfkld knk"
    name="hii my name is kareena"
    
    />
    <New
    k="my name is kareena"
    f="i am a student"
    />

    <Class1 
    m="my name"
    s="blabla"
    />

    <Update1 /> */}

    {/* <Hook1 />
    <Class2 /> */}
    <Navbar1 />
    {/* <Home /> */}
    {/* <About /> */}
    {/* <Contact /> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="/services" element={<Services/>}/> */}
      <Route path="/products" element={<Products/>}/>
      <Route path="/women" element={<Products/>}/>
      <Route path="/men" element={<Products/>}/>
      <Route path="/kids" element={<Products/>}/>
      <Route path="/beauty" element={<Products/>}/>
      <Route path="/jwellery" element={<Products/>}/>
      <Route path="/footwear" element={<Products/>}/>







      </Routes>

      {/* <h1>This is heading tag in app js file</h1>
      <p>React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.</p>
<img src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"></img> */}


    </div>
  );
}

export default App;
