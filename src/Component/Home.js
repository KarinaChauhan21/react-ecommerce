import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function Home(){

  
    return(
        <div style={{  top:'0' ,  }} >

          <br></br>
          <div style={{marginTop:'35px' }}>
    <marquee width="60%" direction="right" height="30px"color="black"  >
<button className='purchase-logo'><b>Choose the best to be the best</b></button>
</marquee>
</div>


          <br></br>

            <div id="carouselExample" className="carousel slide" >
  <div className="carousel-inner">
    <div className="carousel-item active c1">
      <img  src="https://as2.ftcdn.net/v2/jpg/04/07/23/31/1000_F_407233108_ISoxLWU08Xb5Hd8yK9QcOcI8iSxEAcRI.jpg" className="d-block w-100 c1" alt="..." />
    </div>
    <div className="carousel-item c1">
      <img  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 c1" alt="..." />
    </div>
    <div className="carousel-item c1">
      <img  src="https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" className="d-block w-100 c1" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<p style={{fontSize:'30px',color:'skyblue' }}><b>Top  Categories to choose from</b></p>
<hr style={{marginLeft:'100px', marginRight:'100px'}}></hr>




<div className='choose'>
  <Link to="/women" >
    <div   >
      <img  className='in' src='https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
    </div>
    <div  >
      <p   style={{marginLeft:'40px'}}>
   <b> Women Ethenics </b>
    </p>
    </div>
  </Link>

  <Link to="/men">
  <div >
    <div >
      <img className='in'  src='https://chandogi.com/wp-content/uploads/2023/07/10A_1024x1024_2x_07dcba1a-1e4f-48a6-8515-9ea377b65524.jpg' />
    </div>
    <div  >
      <p  style={{marginLeft:'110px'}}>
   <b> Mens Fashion </b>
    </p>
    </div>
  </div>
  </Link>

</div>


<div className='choose'>
  <Link to="/kids" >
    <div >
      <img  className='in' src='https://plus.unsplash.com/premium_photo-1675183690347-662b2f9f3cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' />
    </div>
    <div  >
      <p  style={{marginLeft:'40px'}}>
   <b> Kids </b>
    </p>
    </div>
  </Link>

  <Link to="/beauty">
  <div >
    <div >
      <img className='in'  src='https://media.istockphoto.com/id/940723382/photo/makeup-on-white.jpg?s=2048x2048&w=is&k=20&c=SfJ15bRykQ9FAV924j3FOtnTZh_rSaERIbTkXDXFl20=' />
    </div>
    <div  >
      <p  style={{marginLeft:'110px'}}>
   <b> Beauty Products </b>
    </p>
    </div>
  </div>
  </Link>

</div>


<div className='choose'>
  <Link to ="/jwellery"  >
    <div >
      <img  className='in' src='https://media.istockphoto.com/id/1306734248/photo/golden-earrings-on-white-wooden-box-abstract-image-of-gold-jewelry.jpg?s=612x612&w=0&k=20&c=LtCTB5zad5ozbPi6N_m6h5YrSmgL4Hz1QbFCn8DVNK4=' />
    </div>
    <div  >
      <p  style={{marginLeft:'40px'}}>
   <b> Jwellery </b>
    </p>
    </div>
  </Link>

  <Link to="/footwear">
  <div >
    <div >
      <img className='in'  src='https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=2048x2048&w=is&k=20&c=fVg3h5bDNSB1Be5veCmyxMcl4rTRi_M9q22vSq6MXrE=' />
    </div>
    <div  >
      <p  style={{marginLeft:'110px'}}>
   <b> Footwear </b>
    </p>
    </div>
  </div>
  </Link>

</div>


        </div>
    )
}
export default Home;