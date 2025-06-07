import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row text-center gy-5">
        <div className="col-md-4 px-4">
          <img
            src="media/images/zerodhafundhouse.png"
            width="200"
            alt="Zerodha Fund House"
          />
          <p className="text-muted mt-3">
            Our asset management venture that is creating simple and transparent investment products for retail investors.
          </p>
        </div>

        <div className="col-md-4 px-4">
          <img src="media/images/sensibull-logo.svg" width="200" alt="Sensibull" />
          <p className="text-muted mt-3">
            Options trading platform to create, analyse, and execute strategies using data like open interest, volume, and more.
          </p>
        </div>

        <div className="col-md-4 px-4">
          <img src="media/images/streak-logo.png" width="200" alt="Streak" />
          <p className="text-muted mt-3">
            Systematic trading platform allowing you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-md-4 px-4">
          <img src="media/images/smallcaseLogo.png" width="200" alt="Smallcase" />
          <p className="text-muted mt-3">
            Thematic investment platform to help you invest in diversified portfolios like ETFs.
          </p>
        </div>

        <div className="col-md-4 px-4">
          <img src="media/images/tijori.svg" width="200" alt="Tijori" />
          <p className="text-muted mt-3">
            Investment research platform offering deep insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 px-4">
          <img src="media/images/ditto-logo.png" width="200" alt="Ditto" />
          <p className="text-muted mt-3">
            Personalized advice on life and health insurance. No spam, no mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary fs-5 px-5">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
