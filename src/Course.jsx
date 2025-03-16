import React from 'react'
import './css/Course.css'

function Course({ course }) {
    const { id, title, description, price, image, rating } = course;

    return (
        <div className="course-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{price} TL</p>
            <p className="rating">Rating: {rating}/5</p>
        </div>
    )
}

export default Course