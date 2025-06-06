import React from 'react'

function OpenAccount() {
    return ( 
       <div className='container p-5 mb-5'>
        <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
        <h1 className='mt-5'>
            Open a Zerodha account
        </h1>
        <p>
            Modern online platform for stocks, derivatives, mutual funds, and more.
        </p>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin: "0 auto"}}> Sign up Now </button>
    </div>


       </div>
     );
}

export default OpenAccount;