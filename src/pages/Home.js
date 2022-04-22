import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function home() {
  return (
    <div>
      <Header />

      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: "url('./introBG1.svg')" }}
      >
        <div>
          <div class="droplet"> </div>
          <h1 data-aos='fade-up'>Carl Augustin</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>
              Backend <br /> Developer, Entrepreneur
            </p>
            <button className="primary-button font-bold" ><a href="#courosel">Get Started</a></button>
          </div>

          <div class="droplet"> </div>
        </div>
      </div>
      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#135d4d"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,160C672,160,768,96,864,101.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div data-aos='fade-right' className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <h1>Yes that's right</h1>
              <p>
                I am a backend developer, AI/Machine Learning and Automation....
                ;)
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-2">
            <div>
              <img
                src="./neuralnetwork.svg"
                alt=""
                height="200"
                className="float-start w-100"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <img
                src="./frame.svg"
                alt=""
                height="200"
                className=" float-end w-100"
              />
            </div>
          </div>
        </div>

        <div data-aos='fade-left' className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <p>
                A backend developer is one who makes use of the technology
                required to develop the products for the backend of any website
                and Aplication. A backend developer is responsible for building
                the structure of a software application.
              </p>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>


        <div className="container devstack my-5 n-box2 py-5">
          <div className="text-center">
            <h3 className="font-bold text-center">My Developement Stack</h3>
            <hr/>
            <img
              src="./pngwing.png"
              alt=""
              height="200"
              className=" text-center"
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="font-bold text-center">
                <h3 className="font-bold">Front End</h3>
                <hr/>
                <p>HTML</p>
                <p>CSS</p>
                <p>ReactDom</p>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="font-bold text-center">
                <h3>~</h3>
                <hr/>
                
                <p>VS Code</p>
                <p>IntelliJ IDEA</p>
                <p>JIRA & Bitbucket</p>
                <br/>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="font-bold text-center">
                <h3 className="font-bold">Backend/DB</h3>
                <hr/>
                <p>Python</p>
                <p>Java</p>
                <p>SQL</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="who-iam flex-with-center"  style={{backgroundImage:`url('/blob1.svg')`}}>

          <div>

            <h3>Hi, Hello</h3>
            <hr/>
            <p><pre>{'{" Dreams untill your dreams come true" }'}</pre></p>
            <br />
          </div>

        </div>
        </div>
        
       
      </div>
      <Footer/>
    </div>
  );
}

export default home;
