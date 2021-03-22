import React from "react";

const placeholderImage = "https://via.placeholder.com/100";

export default function PlaceInfo({ address, name, photo, url }) {
    return (
        <section className="row">
            <div className="col s12 m8 offset-m2">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={photo || placeholderImage} alt={name} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>{name}</h3>
                            <p>{address}</p>
                        </div>
                        <div className="card-action">
                            {url ? <a href={url}>Website</a> : undefined}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
