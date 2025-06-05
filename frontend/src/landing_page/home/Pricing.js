import React from 'react';

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        {/* Left Side Text */}
        <div className="col-4">
          <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the discount broking revolution in India, and we continue to lead the way with our simple, transparent, and unbeatable pricing. Flat fees and no hidden fees. We are the only broker to offer a 100% commission-free trading platform.
          </p>
          <a href="#" className="text-primary fs-5" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Spacer Column */}
        <div className="col-2"></div>

        {/* Right Side Pricing Boxes */}
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-4">
              <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "25px" }}></i> 0</h1>
              <p>Free equity delivery and<br />direct mutual funds</p>
            </div>
            <div className="col-6 border p-4">
              <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "25px" }}></i> 20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
