// import React from "react";

// function Hero() {
//   return (
//     <div className="container p-5 mb-5">
//       <div className="row text-center">
//         <img
//           src="media/images/homeHero.png"
//           alt="Hero Image"
//           className="mb-5"
//         />
//         <h1 className="mt-5">Invest in everything</h1>
//         <p>
//           Online platform to invest in stocks, derivatives, mutual funds, and
//           more
//         </p>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from "react";
import { Link } from "react-router-dom"; // 1. Ye import zaroori hai

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* 2. Button ki jagah Link use kiya gaya hai */}
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", textDecoration: "none" }}
        >
          Signup Now
        </Link>
        
      </div>
    </div>
  );
}

export default Hero;