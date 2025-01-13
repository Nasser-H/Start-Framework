import React, { useEffect } from 'react'
import AboutStyle from './About.module.scss'
export default function About() {
  useEffect(()=>{
    document.title = "about"
  },[])
  return <>
<div className={`${AboutStyle.aboutBage} bg-secound-color  text-white`}>
  <div className="container d-flex justify-content-center align-items-center text-center">
    <div className="inner">
          <h2 className='text-uppercase main-text-wight fs-1'>about component</h2>
          <div className="hr"><i class="fa-solid fa-star"></i></div>
    </div>
  </div>
  <div className="container pt-3 px-5">
          <div className="row px-5">
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files
             including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source
             files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
  </div>
</div>
  </>
}
