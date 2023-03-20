import React from 'react'

const Header = () => {
  return (
    <>
<header>
    <section className="container main-hero-container">
    <div className='row'>
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
        <h1 className='display-2'>
            Work Hard Get What you want.<br />All the Equipments.</h1>
        <p className='main-hero-para'> 
        Sint in velit non minim velit excepteur.Et cillum aliquip labore occaecat ut. Deserunt non in mollit tempor pariatur laboris eiusmod aliqua. Cupidatat mollit eiusmod incididunt est consequat do officia excepteur. Nostrud non et nostrud pariatur voluptate sit ipsum est sunt duis tempor pariatur. Aliqua sit incididunt exercitation dolore pariatur reprehenderit proident.
        </p>
        <h3>Get early access for you</h3>
        <div className='input-group mt-3'>
            <input type="text" 
            className='rounded-pill w-75 me-3 p-2 form-control-text' 
            placeholder='Enter your email'></input>
            <div className='input-group-button'> Get it now</div>
        </div>
    </div>
        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images" >
                
                <img src='./images/f4.jpg' 
                alt='heroimg'
                className='img-fluid' />
                <img src='./images/g5.jpg' 
                alt='hero2'
                className='img-fluid main-hero-img2' />
            </div>
            </div>
    </section>
    </header>      
    </>
  )
}
export default Header;
