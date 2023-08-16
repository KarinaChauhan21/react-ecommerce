import React from 'react';
import {Link} from 'react-router-dom';
// import './App.css'


function Navbar1(){
    return(
        <div   style={{position:'fixed' , zIndex:'1'    }} className='navb-r' >
            <nav className="   navbar navbar-expand-lg bg-body-tertiary" >
  <div className=" container-fluid" >

   


    {/* <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    


    <div className=" bb collapse navbar-collapse" id="navbarSupportedContent">

    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>

        <li className="nav-item">
        <Link  to="/" >
          <div style={{height:'20px'}} className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  My Account
  </button>
  <ul style={{marginTop:'30px',backgroundColor:'skyblue'}} className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" to="/">Login</a></li>
    <li><a className="dropdown-item" to="/">sign up</a></li>
    <li><a className="dropdown-item" to="/">Something else here</a></li>
  </ul>
</div>
          </Link>
        {/* <ul className='nav-logo' >
      <li className='image'>
        <img   className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BmlOc0GYk5W4AOlIf-iskCqZ_fM6T2rIuQ&usqp=CAU' alt='...' /> 
       
      </li>
    </ul> */}
        </li>

        <li style={{marginLeft:'50px'}}>
          <div style={{height:'35px',width:'110px',backgroundColor:'skyblue' , fontSize:'20px', borderRadius:'5px' }}>
            <h1 style={{fontSize:'25px',fontFamily:'cursive',marginTop:'5px'}}>Purchase</h1>

          </div>
        </li>
        

        <li className="nav-item ">
        <Link className="nav-link" to="/cart">Cart</Link>
          
           </li>

           {/* <li className="nav-item ">
          <Link className="nav-link " to="/" >
          
          </Link>
           </li> */}


       

      
      </ul>


      
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar1;