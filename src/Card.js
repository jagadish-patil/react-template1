import React from "react";

const Card = ({ title="Basketball", subTitle="some long text", buttonText="My Button", imgURL="" }) => {
    return(
        <div className="card" style={{ width: "18rem" }}>
              <img
                src={imgURL}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {subTitle}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
        </div>

    )
}

export default Card;
