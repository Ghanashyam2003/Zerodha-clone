import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row p-5 align-items-center text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p- mt-3">
          <img
            src="media/images/zerodhafundhouse.png"
            width="200"
            height="auto"
            alt="Zerodha Fund House"
          />

          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            investment products for retail investors
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/sensibull-logo.svg" width="200" height="auto" />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategy,analyse and
            execute strategies data points like open interest, volume,FII/DII ,and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/streak-logo.png  " width="200" height="auto"/>
          <p className="text-small text-muted">Systematic trading platform that allow you to create an back taste strategy without coding</p>
        </div>{" "}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png  " width="200" height="auto"/>
          <p className="text-small text-muted">Thematic investment platform That helps you invest in diverse five bagtests of showcase of ETF</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg  "width="200" height="auto" />
          <p className="text-small text-muted">Investment research platform that offers detail insights on stock sectors supply chains and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ditto-logo.png  "width="200" height="auto" />
          <p className="text-small text-muted">personalize advice on live and health insurance knows spam and no miss personalize advice on live and health insurance knows spam and no mis-sellingselling</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Signup Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Universe;
