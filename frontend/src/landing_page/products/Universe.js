
import React from "react";

function Universe() {
  return (
    <div className="container mt-5 universe-section">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="mb-3">The Zerodha Universe</h1>
          <p className="text-muted fs-5">
            Extend your trading and investment experience even further <br/>
            with our partner platforms
          </p>
        </div>
      </div>

     
      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/zerodhaFundhouse.png" style={{ height: "60px", marginBottom: "20px", objectFit: "contain" }} alt="Fundhouse" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/senibull.png" style={{ height: "40px", marginBottom: "35px", objectFit: "contain" }} alt="Sensibull" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/Tijori.png" style={{ height: "55px", marginBottom: "25px", objectFit: "contain" }} alt="Tijori" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
      </div> 

   
      <div className="row text-center mt-3">
        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/streakLogo.png" style={{ height: "60px", marginBottom: "20px", objectFit: "contain" }} alt="Streak" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/smallcaseLogo.png" style={{ height: "60px", marginBottom: "20px", objectFit: "contain" }} alt="Smallcase" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Thematic investment platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-card d-flex flex-column align-items-center">
            <img src="media/images/dittoLogo.png" style={{ height: "60px", marginBottom: "20px", objectFit: "contain" }} alt="Ditto" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-5">
          <button className="btn btn-primary fs-5 py-2 px-5" style={{ width: "20%", minWidth: "200px", backgroundColor: "#387ed1" }}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;