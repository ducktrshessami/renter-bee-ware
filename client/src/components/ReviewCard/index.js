import React from "react";
import StarRating from "../StarRating";

export default function ReviewCard({ message, stars, startDate, endDate, title }) {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>Dates Occupied: {startDate} - {endDate}</p>
                    <StarRating static={true} rating={stars} />
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};
