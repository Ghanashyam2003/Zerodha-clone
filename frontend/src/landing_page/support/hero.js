import React from "react";

function Hero() {
  return (
    <section
      className="w-100 py-5 mt-5 text-white"
      style={{ backgroundColor: "#387ed1", margin: 0, padding: 0 }}
    >
      <div className="container py-5">
        <div className="row justify-content-between">
          {/* Left Section */}
          <div className="col-md-8 mb-4">
            <h3 className="fw-bold">Support Portal</h3>
            <p className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </p>

            {/* Search Box */}
            <div className="input-group mb-3 shadow-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                style={{ border: "none" }}
              />
              <button className="btn btn-light text-dark" type="button">
                🔍
              </button>
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-4">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4 text-md-end">
            <a
              href="#"
              className="text-white text-decoration-underline d-block mb-3"
            >
              Track tickets
            </a>
            <h5 className="fw-semibold">Featured</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-underline"
                >
                  Surveillance measure on scrips – June 2025
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-underline"
                >
                  Offer for sale (OFS) – June 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
