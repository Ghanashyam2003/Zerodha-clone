import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
