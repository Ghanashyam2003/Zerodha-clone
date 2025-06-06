import React from "react";

function RightSection({ imageUrl, productName, ProductDescription, learnMore }) {
  return ( 
    <div className="container mt-5">
      <div className="row p-5 align-items-center">
        
        
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
          </div>
        </div>

       
        <div className="col-6">
          <img src={imageUrl} alt="Product" className="img-fluid" />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;
