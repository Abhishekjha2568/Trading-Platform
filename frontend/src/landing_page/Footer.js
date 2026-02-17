import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            {/* Logo replaced */}
            <h4 className="text-primary">📈 TradeFlow</h4>
            <p>
              &copy; 2026 TradeFlow Technologies. All rights reserved.
            </p>
            <p className="text-muted">
              TradeFlow is a simulated trading platform built for learning
              and demonstration purposes.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="#" style={{ textDecoration: "none" }}>About</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Products</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Pricing</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Careers</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Press & Media</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="#" style={{ textDecoration: "none" }}>Contact</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Support Portal</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Downloads</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            <a href="#" style={{ textDecoration: "none" }}>Open an Account</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Fund Transfer</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            TradeFlow provides a simulated environment for learning stock and
            derivatives trading concepts. Market data used in this platform
            may be mock or delayed data intended only for educational use.
          </p>

          <p>
            Investments in securities markets are subject to market risks.
            This platform is created for demonstration purposes only and does
            not provide financial advice or real trading services.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
