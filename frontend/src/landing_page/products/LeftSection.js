import React from 'react';

function LeftSection({ imageUrl, productName, ProductDescription, tryDemo, learnMore, googleplay, appstore }) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        
        {/* Left Side */}
        <div className="col-md-6 p-5">
          <img src={imageUrl} className="img-fluid" alt="product" />
        </div>
        
        {/* Right Side */}
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          
          <div className="d-flex gap-4 mt-3">
            <a href={tryDemo} style={{textDecoration:"None"}} >Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{textDecoration:"None"}} >Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="d-flex gap-4 mt-4">
            <a href={googleplay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" style={{ height: "50px" }} />
            </a>
            <a href={appstore}>
              <img src="media/images/appStoreBadge.svg" alt="App Store" className="img-fluid" style={{ height: "50px" }} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
