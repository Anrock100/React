import React, {useState} from 'react'
import Galleryapi from './API/GalleryApi';

const GalleryImg = () => {
    const [GalleryData, setGalleryData] = useState(Galleryapi);
  return (
    <>
    <section className='services-main-container'>
        <div className='container services-container'>
            <h1 className='main-heading text-center fw-bold'>Gallery</h1>
            <div className='row'>
                
                {GalleryData.map((curElem)=>{
                    const{image}=curElem;
                    return(<>
                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'> 
                    <img src={image} alt="pic" className='img-fluid' />
                    
                </div>
                    </>)
                })}
                
                
            </div>
        </div>
    </section>
    
    </>
    
  )
}

export default GalleryImg;

