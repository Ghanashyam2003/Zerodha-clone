import React, { useState } from "react";

const SignupPage = () => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP sent to +91 ${mobile}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      {/* Top Heading */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Open a free demat and trading account online
        </h1>
        <p className="text-gray-600 mt-2">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* Main Section: Left = Image | Right = Signup */}
      <div className="">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="media/images/account_open.svg"
            alt="Zerodha dashboard"
            style={{
              display: "block",
              margin: "0 auto",
              width: "70%",
              marginBottom: "24px",
            }}
          />
        </div>

        {/* Right: Signup Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-700 font-medium block">
                  Signup now
                </label>
                <span className="text-xs text-gray-500">
                  or track your existing application
                </span>
              </div>

              <div className="flex border border-gray-300 rounded-md overflow-hidden h-12">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm flex items-center">
                  <i class="fa-solid fa-flag"></i> +91
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                  required
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 text-gray-800 text-sm font-normal"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded-md font-medium bg-blue-600 hover:bg-black"
              >
                Get OTP
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                By proceeding, you agree to the Zerodha&nbsp;
                <a
                  href="https://zerodha.com/terms/"
                  className="text-blue-600 underline"
                >
                  terms
                </a>{" "}
                &nbsp;and&nbsp;
                <a
                  href="https://zerodha.com/privacy/"
                  className="text-blue-600 underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
