import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Building a modern trading simulation platform
          <br />
          powered by scalable web technologies.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            TradeFlow is a simulated trading platform built to replicate real
            stock trading workflows for learning and experimentation purposes.
          </p>

          <p>
            Users can explore stock data, manage virtual portfolios, and place
            simulated buy and sell orders through an interactive dashboard.
          </p>

          <p>
            The platform demonstrates full-stack development concepts including
            authentication, portfolio tracking, and order execution logic.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            This project focuses on building scalable backend services and
            responsive frontend interfaces using modern JavaScript technologies.
          </p>

          <p>
            TradeFlow helps developers and learners understand how trading
            platforms function in real-world scenarios.
          </p>

          <p>
            Continuous improvements are being added to enhance performance,
            usability, and real-time trading simulations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
