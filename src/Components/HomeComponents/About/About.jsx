import React, { useRef } from 'react'
import "./About.css"
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"
import img4 from "../../../assets/4.jpg"
import img5 from "../../../assets/5.jpg"

const About = ({aboutRef}) => {

  return (
    <div className='about container' ref={aboutRef}>
        <h3 className='header'>About us</h3>

        <div className="cards flex">
            <div className="card workers">
                <div className="card-content">
                    <img src={img1} />
                    <h4>Bartłomiej</h4>
                    <div className="card-hidden">
                        <p>Manages customer service and office administration. He coordinates appointments, handles customer inquiries, and ensures that the administrative side of the shop runs smoothly.</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <img src={img2} />
                    <h4>Paweł</h4>
                    <div className="card-hidden">
                        <p>Is the lead mechanic specializing in engine repairs and maintenance. He is known for his expertise in troubleshooting complex engine issues and providing efficient solutions.</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <img src={img3} />
                    <h4>Kacper</h4>
                    <div className="card-hidden">
                        <p>Is the diagnostic expert in the shop. He uses advanced computer systems to diagnose vehicle problems accurately and quickly, ensuring that every car receives the precise repair it needs.</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <img src={img4} />
                    <h4>Konrad</h4>
                    <div className="card-hidden">
                        <p>Handles all electrical and electronic repairs. From fixing wiring issues to installing new electronic systems, he ensures that the electrical components of vehicles function perfectly.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="box flex">
            <div className="description">
                <h4>Who we are ?</h4>
                <h3>Car repair, services <br/> you can rely on</h3>
                <p> We understand how essential your vehicle is to your daily life. That's why we are committed to 
                    providing top-notch auto repair services that keep you on the road safely and efficiently.
                     Our team of skilled technicians brings years of experience and a passion for automotive excellence to 
                     every job, ensuring that your car receives the best possible care.</p>
                <div className='flex'>
                    <div className="square"></div>
                    <h3>Providing services <br/> since <span>2024</span></h3>
                </div>
            </div>
            <div className="card materials">
                <div className="card-content">
                    <img src={img5} />
                    <h4>Aleksandra</h4>
                    <div className="card-hidden">
                        <p>Is the owner of the car repair shop, with 20 years of experience in the automotive industry. He oversees the operations and ensures the quality of all services provided.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About