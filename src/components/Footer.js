import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className='footer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#135d4d" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>

                <div className="row justify-content-center footer-content">
                    <div className=" col-md-6">
                        <div className='div'>
                            <p>Designed and Developed By</p>
                            <hr/>
                            <div className='d-flex foorter-icons-link justify-content-between px-2'>
                                <a href="https://www.facebook.com/">
                                    <FaFacebook className='footer-icons' />
                                </a>
                                <a href="https://www.instagram.com/carl_thecreat0r/">
                                    <FaInstagram className='footer-icons'/>
                                </a >
                                <a href="carlaugustin24@gmail.com">
                                    <FaMailBulk className='footer-icons'/>
                                </a>
                                <a href="https://www.linkedin.com/in/carl-augustin/">
                                     <FaLinkedinIn className='footer-icons'/>
                                </a>
                                <a href="https://github.com/carlaugustin">
                                    <FaGithub className='footer-icons'/>
                                </a> 
                            </div>
                            <hr/>
                            <br/>
                            <p>TheCreator&copy;2022</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;