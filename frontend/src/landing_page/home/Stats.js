import React from "react";

function Stats() {
  return (
    <div className="constainer p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customers trust us</h2>
          <p className="text-muted">
            That's why 1.3+ crore Customers trust us. We are the best in the
            industry.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No spam or gimmicks, just a simple and transparent platform designed
            to help you invest with confidence. High quality financial services
            with no hidden fees or commissions.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just a stock broker, but a complete financial ecosystem. From
            trading and investing to research and education, 30+ products and
            services to help you achieve your financial goals.
          </p>
          <h2 className="fs-4">Do better with money </h2>
          <p className="text-muted">
            with initiatives like Varsity, Z-Connect, and TradingQ&A, we empower
            you to make informed decisions and take control of your finances.
            Join the Zerodha Universe and start your journey to financial
            success.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem illustration showing interconnected financial services and platforms in a modern, clean style with a calm and professional tone."
            style={{ width: "100%" }}
          />
          <div className="test-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our Products <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
