import React, {useRef} from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import emailjs from '@emailjs/browser'


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
      emailjs.sendForm('service_gmail', 'contactEmailjs', form.current, 'user_D04CfrzslZR1p4tsNHtFc')
      .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
      });
      
      form.current.reset();
    };
    
    return (
        <div>
            <Header/>
            <div className="container contact mt-5">
                <div className="row pt-5">
                    <div className='col-md-6 p-5'>
                        <img src="./contactus1.png" alt=""/>
                    </div>

                    <div className='col-md-6 p-5'>
                    <form ref={form} onSubmit={sendEmail}>
                         <div data-aos='fade-left' className='col-md-10'>
                            <div className=' contact-form m-2 p-5 n-box2'>
                                <h3 className="font-bold">Contact Us</h3>
                                <hr/>
                                <input type="text" name="user_name" className='form-control boxshadow'   placeholder='Name'/>
                                <input type="text" name="user_email" className='form-control boxshadow'  placeholder='Email'/>

                                <textarea name="message" className='form-control boxshadow' rows={3} defaultValue={""}/>
                                
                                <button value="Send" className="primary-button font-bold mt-4">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
