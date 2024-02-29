import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>

      <div className='d-flex justify-content-center align-items-center mt-5 bg-info'>
        <div className='footer d-flex justify-content-evenly align-items-center mt-5'>
          <div className='website' style={{ width: "400px" }}>
            <h5> <i class="fa-solid fa-cart-shopping me-3"></i>E-KART</h5>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reiciendis fuga accusamus nihil laboriosam
              sapiente tempora quos aspernatur debitis sint corrupti, numquam beatae, at, itaque doloremque est excepturi voluptate possimus
            </p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/Home' style={{ color: "black", textDecoration: "none" }}>Home page</Link>
            <Link to='/Kart' style={{ color: "black", textDecoration: "none" }}>Cart</Link>
            <Link to='/Wishlist' style={{ color: "black", textDecoration: "none" }}>Wishlist</Link>
          </div>
          <div className='guides d-flex flex-column ms-5 '>
            <h4>Guids</h4>
            <Link to='https://react.dev/' target='_blank' style={{ color: "black", textDecoration: "none" }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ color: "black", textDecoration: "none" }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ color: "black", textDecoration: "none" }}>Boots Watch</Link>
          </div>
          <div className='contactus  ms-5 '>
            <h4 style={{ color: "black" }}>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email' />
              <button className='btn btn-warning ms-3' >subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-atems-center mt-3'>
              <Link ><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
              <Link > <i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center' >Copyright &copy; 2024 E-KART. Built with react</p>
    </>
  )
}

export default Footer