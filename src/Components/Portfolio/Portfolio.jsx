import React, { useEffect, useState } from 'react'
import PortfolioStyle from './Portfolio.module.scss'
import image1 from '../../assets/images/images1.png'
import image2 from '../../assets/images/images2.png'
import image3 from '../../assets/images/images3.png'

export default function Portfolio() {

  useEffect(()=>{
    document.title = "portfolio";
  },[]);

  const images = [
    {src:image1 , alt: 'image-1'},
    {src:image2 , alt: 'image-2'},
    {src:image3 , alt: 'image-3'},
    {src:image1 , alt: 'image-1'},
    {src:image2 , alt: 'image-2'},
    {src:image3 , alt: 'image-3'}
  ];
  const [currentImage, setCurrentImage] = useState(0);
  function selectImag(Image ,Alt){
    setCurrentImage({
      src: Image,
      Alt: Alt 
    });
    console.log(currentImage);
  }
  function closeImage(){
    setCurrentImage(0);
  }
  function stopClose(e){
    e.stopPropagation();
  }
  return <>
  <div className={PortfolioStyle.portfolioBage}>
    <div className="container mt-4">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <figcaption className='text-main-color text-center'>
          <h2 className='text-uppercase main-text-wight fs-1'>portfolio component</h2>
          <div className="hr2"><i className="fa-solid fa-star"></i></div>
        </figcaption>
      </div>
      <div className="row g-5 mb-4">
        {images.map((img ,index ) => { 
          return(
                  <div key={index} className="col-md-4">
                    <div className="inner">
                      <div className="card">
                        <img src={img.src} className="card-img position-relative" alt={img.alt} />
                        <div onClick={()=>{ selectImag(img.src , img.alt) }} className={`${PortfolioStyle.layer} card`}>
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>          
        )
        })}
   
      </div>
    </div>
    {currentImage !== 0 ? <div onClick={closeImage} className={PortfolioStyle.overlay}>
      <div onClick={stopClose} className={PortfolioStyle.innerOverlay}>
        <img className="w-100" src={currentImage.src} alt={currentImage.Alt} />
      </div>
    </div>: null}


  </div>
  </>
}
