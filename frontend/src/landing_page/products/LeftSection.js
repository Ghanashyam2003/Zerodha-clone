import React from 'react'

function LeftSection({imageUrl,productName,ProductDescription,tryDemo,learnMore,googleplay,appstore,description}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-5">
          <img src={imageUrl}></img>
        </div>
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <a href={tryDemo}>TryDemo</a>
          <a href={learnMore}>Learn More</a>
          <a href={googleplay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appstore}>
            <img src="media/images/appStoreBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection