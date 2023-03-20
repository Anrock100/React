import React, {useState} from 'react';
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
    const [aboutdata, setAboutData]= useState(howToUseApp);
  return (
    <>
    <section className='common-section our-services'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                    <img src="./images/h4.avif" alt="aboutusImg" />
                </div>
                <div className='col-12 col-lg-7 our-services-list'>
                    <h4 className='mini-title'> 
                    - - AVAIABLE @ GOOGLE AND ISO APP STORE ONLY</h4>
                    <h1 className='main-heading'>How to use the App?</h1>
                  
                   {aboutdata.map((curElem)=>{
                    const {id, title, info}=curElem;
                    return( <>
                     <div className='row our-services-info' key={id}>
                        <div className='col-1 our-services-number'>{id}</div>
                        <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                            <p className='main-hero-para'>{info}
                            </p>
                        </div>
                        </div>
                    </>
                    );
                   })}
                 <br/>
                <button className="btn-style btn-style-border">Learn more</button>
            </div>
         </div>
        </div>
    </section>
    {/* 2nd part of about us */}

    <section className='common-section our-services our-services-rightside'>
        <div className='container mb-5'>
            <div className='row'>
                
                <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center
                 align-items-start flex-column'>
                    <h4 className='mini-title'> 
                    - - SUPPORT IN ANYTIME - -</h4>
                    <h1 className='main-heading'>EAT WORK LIFT <br/>REPEAT</h1>
                  
                   {aboutdata.map((curElem)=>{
                    const {id, title, info}=curElem;
                    return( <>
                     <div className='row our-services-info' key={id}>
                        <div className='col-1 our-services-number'>{id}</div>
                        <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                            <p className='main-hero-para'>{info}
                            </p>
                        </div>
                        </div>
                    </>
                    );
                   })}
                 <br/>
                <button className="btn-style btn-style-border">Learn more</button>
            </div>
            <div className='col-12 col-lg-5 our-service-rightside-img'>
                    <img src="./images/h7.jpg" alt="aboutusImg" />
                </div>
            {/* images section */}
         </div>
        </div>
    </section>

    </>
  )
}

export default Aboutus;
