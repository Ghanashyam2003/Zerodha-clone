import React from "react";

function Awards() {
    return ( 
      <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src="media/images/largestBroker.svg"/>
            </div>
             <div className="col-6 p-5 mt-3">
                <h1>Largest stock broker in india</h1>
                <p className="mt-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and Investing in: </p>
                <div className="row">
                    <div className="col-6 p-4">
                         <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>

                </ul>
                    </div>
                    <div className="col-6 p-4">
                         <ul>
                    <li>
                        <p>Stocks & IPO</p>
                    </li>
                    <li>
                        <p>Direct mutuall funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>

                </ul>
                    </div>
                </div>
               <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
             </div>
            
        </div>
      </div>
     );
}

export default Awards;