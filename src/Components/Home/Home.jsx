import React, { useEffect } from 'react'
import HomeStyle from './Home.module.scss'
import avaterImage from '../../assets/images/avataaars.svg'
export default function Home() {

  useEffect(() => {
    document.title = "home"
  }, [])
  

  return <>
<div className={`${HomeStyle.homeBage} bg-secound-color`} >
<div className="container text-center text-white">
<div className='d-flex justify-content-center align-items-center'>
  <div>
      <img src={avaterImage} className={HomeStyle.avaterImage} alt="avater image" />
  <h2 className='text-uppercase main-text-wight fs-1 mt-4'>start Framework</h2>
  <div className="hr my-3"><i className="fa-solid fa-star"></i></div>
  <p>Graphic Artist - Web Designer - Illustrator</p>
  </div>

</div>
</div>
</div>


  </>
}
