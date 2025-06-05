import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
            <img src="media/images/education.svg"style={{width: "80%"}} alt="Education illustration showing a person learning about the stock market with books and charts in a modern."/>
        </div>
        <div className="col-6">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest stock market education platform in India, is
            designed to help you learn about the stock market, trading.
          </p>
          <a
            href="#"
            className="text-primary fs-5"
            style={{ textDecoration: "none" }}
          >
            Versity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-muted mt-5">
            TradingQ&A is a free and open platform for traders to ask questions,
            share knowledge, and learn from each other. It is a community-driven
            platform that aims to help traders improve their skills and make
            better trading decisions.
          </p>
          <a
            href="#"
            className="text-primary fs-5"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
