import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap ">
          <div className="first mt-5">
            <h4>Vishwajeet Kumbhar</h4>
            <p>@ 2023  All Rights reserved</p>
            <p className='d-flex' >
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>AIWorld@gmail.com</p>
            <p>9876543210</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer