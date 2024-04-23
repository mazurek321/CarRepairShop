import React, { useState } from 'react'
import "./Reviews.css"

const AddReview = ({setToggleRev}) => {
    const [stars, setStars] = useState(0)

  return (
    <div className='add-review'>
        <div className="box">
            <div className="top">
                <div className="header">Add review</div>
                <button onClick={()=>{setToggleRev(false)}}>Cancel</button>
            </div>
            <form>
                <div className="form-content container flex">
                    <label>Name*</label>
                    <input type="text" placeholder='Enter your name here'/>

                    <label>Description</label>
                    <textarea placeholder='Leave a comment'></textarea>

                    <label>Grade*</label>
                    <div className="grade">
                        <span className="material-symbols-outlined icon">grade</span>
                        <span className="material-symbols-outlined icon">grade</span>
                        <span className="material-symbols-outlined icon">grade</span>
                        <span className="material-symbols-outlined icon">grade</span>
                        <span className="material-symbols-outlined icon">grade</span>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddReview