import React from 'react'
// import Link from 'react-dom'
function Footers() {
  return (
    
        <div style={{ height: '50px' }} className='container mb-5 w-100'>
            <div className="footer-content d-flex justify-content-between">

                <div style={{ width: '400px' }} className="media">
                    <h5 className='d-flex'>
                    ExploreWorld <i className="fa-solid fa-motorcycle fa-beat ms-2 "></i></h5>
                    <p style={{ textAlign: 'justify' }}>Designed and build with all love in the MotoWorld team </p>
                    <p  style={{ textAlign: 'justify' }}>Code licensed MIT, docs CC BY 3.0</p>
                    
                </div>

                <div className="contact">
                    <h5>Contact</h5>
                    <div className="d-flex">
                        <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                        <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                    <div className="icons d-flex justify-content-between mt-3">
                        <a href="https://twitter.com/?lang=en-in" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-twitter fa-1x"></i></a>
                        <a href="https://www.instagram.com/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-instagram fa-1x"></i></a>
                        <a href="https://www.facebook.com/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-facebook fa-1x"></i></a>
                        <a href="https://www.linkedin.com/feed/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-linkedin fa-1x"></i></a>
                        <a href="https://github.com/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-github fa-1x"></i></a>
                        <a href="https://web.whatsapp.com/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-solid fa-phone fa-1x"></i></a>

                    </div>
                </div>

            </div>
        </div>
        
    
  )
}

export default Footers
