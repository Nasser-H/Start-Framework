import React from 'react'
import FooterStyle from './Footer.module.scss'
export default function Footer() {
  return <>
    <footer className="bg-main-color z-3 text-white pt-5">
      <div className="container p-5">
        <div className="row mb-md-4 gy-5">
          <div className="col-md-4">
            <div className={FooterStyle.inner}>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={FooterStyle.inner}>
              <h3>AROUND THE WEB</h3>
              <ul className="list-unstyled d-flex justify-content-center column-gap-2">
                <li className={FooterStyle.links}><i className="fa-brands fa-facebook"></i></li>
                <li className={FooterStyle.links}><i className="fa-brands fa-twitter"></i></li>
                <li className={FooterStyle.links}><i className="fa-brands fa-linkedin-in"></i></li>
                <li className={FooterStyle.links}><i className="fa-solid fa-globe"></i></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className={FooterStyle.inner}>
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
          <div className="bg-footer-color py-4 text-white d-flex justify-content-center align-items-center">
      <p className='m-0'>Copyright © Your Website 2021</p>
    </div>
    </footer>

  </>
}
