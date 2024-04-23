import React, { useRef } from 'react'
import "./About.css"

const About = ({aboutRef}) => {

  return (
    <div className='about container' ref={aboutRef}>
        <h3 className='header'>About us</h3>

        <div className="cards flex">
            <div className="card workers">
                <div className="card-content">
                    <h4>Workers</h4>
                    <div className="card-hidden">
                        <p>Best workers itp itd</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <h4>Workers</h4>
                    <div className="card-hidden">
                        <p>Best workers itp itd</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <h4>Workers</h4>
                    <div className="card-hidden">
                        <p>Best workers itp itd</p>
                    </div>
                </div>
            </div>

            <div className="card materials">
                <div className="card-content">
                    <h4>Workers</h4>
                    <div className="card-hidden">
                        <p>Best workers itp itd</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="box flex">
            <div className="description">
                <h4>Who we are ?</h4>
                <h3>Car repair, services <br/> you can rely on</h3>
                <p>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku.</p>
                <div className='flex'>
                    <div className="square"></div>
                    <h3>Providing services <br/> since <span>2024</span></h3>
                </div>
            </div>
            <div className="card"></div>
        </div>
    </div>
  )
}

export default About