import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-2">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-5 text-muted fs-6" style={{ lineHeight: "1.7" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nitin Kamath"
            className="mb-3"
            style={{ width: "65%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Nitin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          
          <p>
            Connect on{' '}
            <a href="" style={{ textDecoration: "none" }}>Homepage</a> /{' '}
            <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{' '}
            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
        <img
  src="media/images/people2.png"
  alt="people"
  className="mt-5"
  style={{ width: "100%", height: "1200px", objectFit: "cover" }}
/>

      </div>
    </div>
  );
}

export default Team;
