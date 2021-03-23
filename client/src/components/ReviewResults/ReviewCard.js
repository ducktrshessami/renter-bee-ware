import React from "react";
import StarRating from "../StarRating";

export default function ReviewCard({ title, startDate, endDate, stars, message }) {
    return (
        <div className="col s12 m6">
            <div className="card hoverable">
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
