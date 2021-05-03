import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Review = ({ reviews }) => {
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const list = [];
            if (reviews && reviews.length > 0) {
            for (let id of reviews) {
                let result = await axios
                    .get(`http://localhost:8080/reviews/product/${id}`)
                    .then((res) => res.data);
                list.push(result);
            }
            setReviewList(list[0]);
        }}
        fetchData();
    }, [reviews]);


    return (
        <>
        
            {reviewList.map((review) => (
                <div className="comment__container" key={review.id}>
                    <div className="comment">
                        <h6 className="name">{review.accountEmail}</h6>
                        <p>{review.text}</p>
                    
                    </div>
                </div>))}
        </>
        
    )
}

export default Review
