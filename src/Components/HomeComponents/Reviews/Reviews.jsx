import React, { useEffect, useState} from 'react'
import "./Reviews.css"
import { ReviewsData } from './ReviewsData'
import AddReview from './AddReview'

const Reviews = ({reviewsRef, toggleRev, setToggleRev}) => {
    const [number, setNumber] = useState(0)
    const [reviewNumber, setReviewNumber] = useState(3)
    const [buttonClicked, setButtonClicked] = useState(false)
    let allReviews = ReviewsData.length

    useEffect(()=>{
        let grades = []
        let amount = ReviewsData.length
        let sum = 0
        ReviewsData.map((review)=>{grades.push(review.grade);})
        grades.forEach(grade => {
            sum+=grade
        });
        let max=0
        for(let i=0; i<grades.length; i++){
            if(grades[i] > max){
                max = grades[i]
            }
        }
        let number = sum/(amount*max)*100
        let numberDisplay = number.toFixed(0)
        setNumber(numberDisplay)
    }, [])


    const displayGrade = (grade) => {
        let grades = []
        for(let i=0; i<grade; i++){
           grades.push(<span className="material-symbols-outlined">grade</span>)
        }
        return grades
    }

    const displayReviews = () => {
        let reviews = ReviewsData.map((review, index)=>(
                <div className="review flex" key={index}>
                    <div className="user-img">
                        <img src={review.img} alt={review.userName} />
                    </div>
                    <div className="details">
                        <div className="user-details flex">
                            <h3>{review.userName}</h3>
                            <div className="stars">
                                {displayGrade(review.grade)}
                            </div>
                        </div>
                        <div className="comment">
                            <p>{review.comment}</p>
                        </div>
                    </div>
                </div>
        ));

        return reviews.slice(0,reviewNumber)
    }

    const handleButton = () => {
        if (reviewNumber < allReviews){
            setReviewNumber(r => r+=5)
            setButtonClicked(true)
        }else{
            setButtonClicked(false)
            setReviewNumber(r=>r=3)
            reviewsRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }

    const toggleReview = () => {
        setToggleRev(!toggleRev)
    }

    const styledBar = {
        position: 'absolute',
        background: 'red',
        height: '4px',
        width: `${number}%`,
    }

  return (
    <div className='reviews container' >
        {toggleRev && <AddReview setToggleRev={setToggleRev}/>}
        <h3 className='header' ref={reviewsRef}>Reviews</h3>
        <div className="box">
            <div className="top flex">
                <div className="left">
                    <h3 className='flex'>Client satisfaction <span>{number}%</span></h3>
                    <div className="bar">
                        <div className="progress" style={styledBar}></div>
                    </div>
                </div>
                <div className="right">
                    <button onClick={toggleReview}>Write a review</button>
                </div>
            </div>
            <div className="bottom">
                {displayReviews()}
            </div>
            <div className="button">
                {reviewNumber < allReviews ? 
                    <button onClick={handleButton}>View more</button> : 
                        buttonClicked && <button onClick={handleButton}>Hide</button>
                }
            </div>
        </div>
    </div>
  )
}

export default Reviews