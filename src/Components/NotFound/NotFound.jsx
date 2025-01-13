import React, { useEffect } from 'react'
import NotFoundStyle from './NotFound.module.scss'
export default function NotFound() {
  useEffect(()=>{
    document.title = "404"
  },[]);
  return <>
  <div className={`${NotFoundStyle.notFound} bg-secound-color  text-white`}>
    <div className="container d-flex justify-content-center align-items-center text-center">
      <div className="inner">
            <h2 className='text-danger main-text-wight fs-1'>404 Not Found</h2>
            <div className="hr"><i class="fa-solid fa-star"></i></div>
            <p className='pt-3 h2'>This page doesn’t exist.</p>
            <p className='h5 pt-2 text-warning'>i'am sorry <i className="fa-regular fa-face-smile-beam"> ...</i></p>
      </div>
    </div>

  </div>
  </>
}
