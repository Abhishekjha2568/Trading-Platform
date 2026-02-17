import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">About TradeFlow</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 p-3 text-center">
          <h4 className="mt-3">Project Overview</h4>
          <p>
            TradeFlow is a full-stack simulated trading platform developed to
            practice and understand stock and derivatives trading workflows.
          </p>

          <p>
            The platform allows users to create accounts, explore stock data,
            manage virtual portfolios, and simulate buy and sell orders in a
            real-time dashboard environment.
          </p>

          <p>
            This project focuses on building scalable backend services,
            responsive frontend interfaces, and real-time trading simulations
            using modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
