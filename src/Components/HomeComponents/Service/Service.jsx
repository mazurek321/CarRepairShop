import React from 'react'
import "./Service.css"
import { ServiceData } from './ServiceData'

const Service = ({serviceRef}) => {

    const displayCards = () => {
        return ServiceData.map((card, index)=>(
            <div className="card" key={index}>
                <div className="image">
                    <img src={card.img} alt={card.header} />
                </div>
                <div className="description">
                    <h4>{card.header}</h4>
                    <p>{card.description}</p>
                </div>
                <div className="icon"></div>
            </div>
        ))
    }

  return (
    <div className='service'>
        <h3 className='header' ref={serviceRef}>Service</h3>
        <div className="cards container flex">
            {displayCards()}
        </div>
    </div>
  )
}

export default Service