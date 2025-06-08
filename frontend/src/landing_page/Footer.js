import React from "react";

function Footer() {
  return (
    <footer className="bg-light mt-5 pt-5 border-top text-muted">
      <div className="container">
        {/* Top Footer */}
        <div className="row">
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "150px" }}
              className="mb-3"
            />
            <p>© 2010 - 2025 Zerodha Broking Ltd. All rights reserved.</p>
            <div className="d-flex gap-3 fs-5 mt-3">
              <a href="#" className="text-dark">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Accounts */}
          <div className="col-md-2 mb-4">
            <h6
              className="fw-semibold text-dark"
              style={{ marginBottom: "20px" }}
            >
              Accounts
            </h6>
            <ul className="list-unstyled" >
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Open demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Minor demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  NRI demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Commodity
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Dematerialisation
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  MTF
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold text-dark">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Status of your complaints
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Bulletin
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Circulars
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold text-dark">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Zerodha tech
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Open source
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-dark">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Upcoming IPO
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Brokerage charges
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Market holidays
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Economic calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Calculators
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none text-muted" style={{lineHeight: "2.5"}}>
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-muted small mt-4" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Broking Ltd.
            – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to{" "}
            <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>,
            for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by <a href="#">SEBI</a> | <a href="#">ICF</a>
          </p>
          <p>
            Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details: Name, PAN, Address,
            Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
            redressal of the grievances
          </p>
          <p>
            <a href="#">Smart Online Dispute Resolution</a> |{" "}
            <a href="#">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins only by pledge. 2) Update contact details with your broker.
            3) Check your securities in the consolidated account statement.
          </p>
          <p>
            Prevent unauthorized transactions in your account. Update contact
            details with your broker. KYC is one-time with SEBI intermediaries.
            No need to repeat KYC again. IPOs do not need cheques. Use bank
            account number in application. Funds remain in your bank account in
            case of non-allotment.
          </p>
          <p>
            As a business we don’t give stock tips or allow trading on behalf of
            others. If you find anyone doing this in our name, please raise a
            ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
