import React from "react";

function Universe() {
  return (
    <div className="container mt-5 universe-section">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="mb-3">TradeFlow Platform Features</h1>
          <p className="text-muted fs-5">
            Enhance your trading experience with powerful tools <br />
            and real-time portfolio simulations
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <h5>📊 Real-Time Dashboard</h5>
          <p className="text-muted">
            Interactive dashboard showing simulated stock prices,
            holdings, and portfolio performance in real time.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <h5>💼 Portfolio Management</h5>
          <p className="text-muted">
            Track virtual investments, monitor gains & losses,
            and manage trading positions efficiently.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <h5>🔄 Order Simulation</h5>
          <p className="text-muted">
            Simulate buy and sell orders with real trading
            workflows for learning purposes.
          </p>
        </div>
      </div>

      <div className="row text-center mt-3">
        <div className="col-md-4 mb-5">
          <h5>📈 Market Data Visualization</h5>
          <p className="text-muted">
            Charts and analytics help users understand market
            movement and investment behavior.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <h5>Secure Authentication</h5>
          <p className="text-muted">
            Secure login and user account management using
            modern authentication systems.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <h5>⚡ Scalable Backend</h5>
          <p className="text-muted">
            Backend services handle portfolio updates,
            order execution, and user data efficiently.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-5">
          <button
            className="btn btn-primary fs-5 py-2 px-5"
            style={{ width: "20%", minWidth: "200px", backgroundColor: "#387ed1" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
