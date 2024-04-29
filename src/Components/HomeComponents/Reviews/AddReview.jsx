import React, { useState, useRef } from 'react'
import "./Reviews.css"

const AddReview = ({setToggleRev}) => {
    const [stars, setStars] = useState(0)
    const [tempStars, setTempStars] = useState(0)
    const reviewBox = useRef()
    const handleClick = (e) => {
        e.target==reviewBox.current && setToggleRev(false)
    }

    const handleGrade=(rating)=>{
        setStars(rating)
        console.log(rating)
    }

  return (
    <div className='add-review' ref={reviewBox} onClick={e=>handleClick(e)}>
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
                    <div className="grades">
                        <span className={`material-symbols-outlined ${[1,2,3,4,5].includes(stars) && "active"}`} onClick={()=>handleGrade(1)}>grade</span>
                        <span className={`material-symbols-outlined ${[2,3,4,5].includes(stars) && "active"}`}  onClick={()=>handleGrade(2)}>grade</span>
                        <span className={`material-symbols-outlined ${[3,4,5].includes(stars) && "active"}`}  onClick={()=>handleGrade(3)}>grade</span>
                        <span className={`material-symbols-outlined ${[4,5].includes(stars) && "active"}`}  onClick={()=>handleGrade(4)}>grade</span>
                        <span className={`material-symbols-outlined ${[5].includes(stars) && "active"}`}  onClick={()=>handleGrade(5)}>grade</span>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddReview