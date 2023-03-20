import React, {useState}from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <section className='navbar-bg' >
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">Fitness Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation" 
    // onClick={ ()=> setShow(!show) }
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div class={`collapse navbar-collapse ${show ? "show" : ""} `} > */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/store" to="/Store">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" to="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" to="/about">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn-style btn-style-border" type="submit">Sign Up</button>
        <button class="btn-style btn-style-border" type="submit">Login</button>

      </form>
    </div>
  </div>
</nav>
</section>
    </>

  );
};

export default Navbar;
