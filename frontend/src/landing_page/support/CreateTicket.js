import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h3 className=" mb-4 fs-4">
          To create a ticket, select a relevant topic
        </h3>

        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i className="fa-solid fa-circle-plus me-2"></i>
            Account Opening
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
                Resident individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Non Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Glossary
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i class="fa-regular fa-user"></i> Your Zerodha Account
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
                Your Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Account modification
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Nomination
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Transfer and conversion of securities
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i class="fa-solid fa-chart-column"></i> Kite
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                IPO
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                Trading FAQs{" "}
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                Margin Trading Facility (MTF) and Margins{" "}
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                Charts and orders{" "}
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                Alerts and Nudges{" "}
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                {" "}
                General{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i class="fa-solid fa-folder-closed"></i> Funds
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
                Add money
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Withdraw money
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Add bank accounts
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                eMandates
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i class="fa-solid fa-circle-user"></i> Console
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
               Portfolio

              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Corporate actions
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
               Funds statement

              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Profile

              </a>
            </li>
             <li>
              <a href="#" className="text-decoration-none ">
                Segments

              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4" style={{ lineHeight: "2.5" }}>
          <h4 className="mb-3">
            <i class="fa-solid fa-circle-dot"></i> Coin
          </h4>

          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none ">
                Mutual funds


              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                National Pension Scheme (NPS)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Features on Coin
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                Payments and Orders

              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none ">
                General
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
