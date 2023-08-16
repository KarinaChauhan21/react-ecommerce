import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Products(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div style={{overflow:'hidden' , }}>
            <nav className="  navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <Link clLinkssName="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className=" hello collapse navbar-collapse" id="navbarNav">
<div className='yess'>
      <div className='inner'>
        <div >
    <img className='imgg'  src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"  alt='..' />
    </div>
   <div>
 <div>Grocery</div>
   </div>
    

      </div>

      <div className='inner'>
  
  <div >
    <img className='imgg'  src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"  alt='..' />
    </div>
   <div>
 <div>Mobile</div>
   </div>
      </div>

      <div className='inner'>
        <div >
    <img className='imgg'  src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt='..' />
    </div>
   <div>
 <div>Fashion</div>
   </div>
      </div>

      <div className='inner'>
        <div >
    <img className='imgg'  src="https://media.istockphoto.com/id/1171902434/photo/smart-industry-control-concept.jpg?s=2048x2048&w=is&k=20&c=1xKarGfePVHAmR0YMFKMO4KPC10fr2WquCPo3tebRS4=" alt='..' />
    </div>
   <div>
 <div>Electronics</div>
   </div>
      </div>

      <div className='inner'>
        <div >
    <img className='imgg'  src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=3DsirCcxwfFA_uKZ6vR8AHmLzSgRSZWvKPOtbU9bu1Y=" alt='..' />
    </div>
   <div>
 <div>Home & Furniture</div>
   </div>
      </div>

      <div className='inner'>
        <div >
    <img className='imgg'  src="https://media.istockphoto.com/id/691988470/photo/set-of-kitchen-home-appliances-toaster-kettle-mixer-blender-yogurt-maker-multicooker-grinder.jpg?s=2048x2048&w=is&k=20&c=Y3Woc7CaB-XXC3eaB9-fBNlL4gMSYkcb3pL9gQJZIZY=" alt='...' />
    </div>
   <div>
 <div>Appliances</div>
   </div>
      </div>

      <div className='inner'>
        <div > 
    <img className='imgg'  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt='...' />
    </div>
   <div>
 <div>Beauty</div>
   </div>
      </div>
      {/* <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul> */}
</div>

    </div>
  </div>
</nav>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner   ">
    <div class="carousel-item active  c2">
      <img className='caraimg' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>hii welcome to my website </h5>
        <p>you will find everything you want in your daily need.</p>
      </div>
    </div>
    <div class="carousel-item  c2">
      <img  className='caraimg' src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1423&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item c2">
      <img className='caraimg'  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div className='pp'>

    {/* <div className='pp1'>
        <p style={{marginTop:'90px' ,marginLeft:'70px',marginRight:'90px', fontSize:'20px'} } > Women Ethenics</p>

    </div> */}

    <div className='pp2'>
        <Carousel responsive={responsive}>
  <div>
    <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://media.istockphoto.com/id/1059524166/photo/beautiful-charming-indian-woman-in-saree.webp?b=1&s=170667a&w=0&k=20&c=2e3mkh1hD41EkmwSWjS29a7T98smOZy5R_oVq7Ou4XU='></img>

    </div>
    <div><p>sarees</p>
    
    </div>
    
  </div>

  <div style={{marginLeft:'00px'}}>
    <div>
    <img style={{width:'250px',height:'170px' , marginTop:'10px'}} src='https://images.unsplash.com/photo-1597983073540-684a10b15ab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3VydGlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>

    </div>
    <div><p>kurtis</p>
   
    </div>
    </div>
  <div>
  <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'></img>

    </div>
    <div><p>Jeans</p>
    
    </div>
  </div>
  <div>
  <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://images.unsplash.com/photo-1599255068390-206e0d068539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>

    </div>
    <div><p>T shirt</p>
    
    </div>
  </div>
  <div>Item 4</div>
  <div>Item 4</div>
  <div>Item 4</div>

   </Carousel>
</div>


    {/* <div className='pp3'>
        <img style={{height:'190px',width:'212px',marginTop:'10px' }} src='https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>

    </div>
     */}

    
    

    
</div>


<div className='pp' style={{marginTop:'40px'}}>

    <div className='pp1' style={{ backgroundColor:'grey'}}>
        <p style={{marginTop:'90px' ,marginLeft:'70px',marginRight:'90px', fontSize:'20px',} } >Mens Fashion</p>

    </div>

    <div className='pp2'>
        <Carousel responsive={responsive}>
  <div>
    <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://media.istockphoto.com/id/1059524166/photo/beautiful-charming-indian-woman-in-saree.webp?b=1&s=170667a&w=0&k=20&c=2e3mkh1hD41EkmwSWjS29a7T98smOZy5R_oVq7Ou4XU='></img>

    </div>
    <div><p>sarees</p>
    
    </div>
  </div>

  <div>
    <div>
    <img style={{width:'250px',height:'170px' , marginTop:'10px'}} src='https://images.unsplash.com/photo-1597983073540-684a10b15ab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3VydGlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>

    </div>
    <div><p>kurtis</p>
   
    </div>
    </div>
  <div>
  <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'></img>

    </div>
    <div><p>Jeans</p>
    
    </div>
  </div>
  <div>
  <div>
    <img style={{width:'250px',height:'170px',marginTop:'10px'}} src='https://images.unsplash.com/photo-1599255068390-206e0d068539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>

    </div>
    <div><p>T shirt</p>
    
    </div>
  </div>
  <div>Item 4</div>
  <div>Item 4</div>
  <div>Item 4</div>

   </Carousel>
</div>


    {/* <div className='pp3'>
        <img style={{height:'200px',width:'212px'}} src='https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>

    </div> */}
    

    
    

    
</div>



            
        </div>
    )

}

export default Products;