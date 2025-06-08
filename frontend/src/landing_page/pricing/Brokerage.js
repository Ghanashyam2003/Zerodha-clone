import React from 'react'

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
        <a href='' style={{textDecoration:"None"}}>  <h3 className='fs-5'>Brokerage calculator</h3></a>
        <ul className='text-start fs-6 text-muted ' style={{lineHeight:"2.5"}}>
          <li>
            <a href='' style={{textDecoration:"None"}}>Equity delivery</a> - ₹ 0
          </li>
          <li>
            <a href='' style={{textDecoration:"None"}}>Intraday and F&O trades</a> - ₹ 20 or 0.03% (whichever is lower)
          </li>
          <li>
            <a href='' style={{textDecoration:"None"}}>Options trades</a> - ₹ 20 per executed order
          </li>
          <li>
            <a href='' style={{textDecoration:"None"}}>Currency and commodity trades</a> - ₹ 20 or 0.03% (whichever is lower)
          </li>
        </ul>
        </div>
        <div className="col-4 p-4">
        <a href='' style={{textDecoration:"None"}}>  <h3 className='fs-5'>List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage