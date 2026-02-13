import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
 
  const orders = [
    { name: "INFY", qty: 2, price: 1555.45, status: "COMPLETE", type: "BUY", time: "10:15:22" },
    { name: "RELIANCE", qty: 1, price: 2112.40, status: "COMPLETE", type: "BUY", time: "11:05:10" },
    { name: "TCS", qty: 5, price: 3194.80, status: "CANCELLED", type: "SELL", time: "14:20:45" },
  ];

  return (
    <div className="orders-container" style={{ padding: "20px" }}>
      
      {orders.length === 0 ? (
        <div className="no-orders" style={{ textAlign: "center", marginTop: "100px" }}>
          <p style={{ color: "#666", fontSize: "14px" }}>You haven't placed any orders today</p>
          <Link to="/" className="btn" style={{ 
            backgroundColor: "#4184f3", color: "white", padding: "10px 20px", 
            borderRadius: "4px", textDecoration: "none", display: "inline-block", marginTop: "20px" 
          }}>Get started</Link>
        </div>
      ) : (
        <>
          <h3 style={{ fontSize: "18px", color: "#444", marginBottom: "20px" }}>Orders ({orders.length})</h3>
          <div className="order-table" style={{ width: "100%", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #eee", color: "#9ba3ad", textAlign: "left" }}>
                  <th style={{ padding: "15px 10px" }}>Time</th>
                  <th style={{ padding: "15px 10px" }}>Type</th>
                  <th style={{ padding: "15px 10px" }}>Instrument</th>
                  <th style={{ padding: "15px 10px" }}>Product</th>
                  <th style={{ padding: "15px 10px" }}>Qty.</th>
                  <th style={{ padding: "15px 10px" }}>Avg. Price</th>
                  <th style={{ padding: "15px 10px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "15px 10px", color: "#999" }}>{order.time}</td>
                    <td style={{ padding: "15px 10px" }}>
                      <span style={{ 
                        backgroundColor: order.type === "BUY" ? "#e7f3ff" : "#fff1f0", 
                        color: order.type === "BUY" ? "#4184f3" : "#ff5722",
                        padding: "2px 6px", borderRadius: "2px", fontWeight: "600", fontSize: "11px"
                      }}>{order.type}</span>
                    </td>
                    <td style={{ padding: "15px 10px", fontWeight: "600", color: "#444" }}>{order.name}</td>
                    <td style={{ padding: "15px 10px", color: "#666" }}>CNC</td>
                    <td style={{ padding: "15px 10px" }}>{order.qty} / {order.qty}</td>
                    <td style={{ padding: "15px 10px" }}>{order.price.toFixed(2)}</td>
                    <td style={{ padding: "15px 10px" }}>
                      <span style={{ 
                        color: order.status === "COMPLETE" ? "#4caf50" : "#ff5722", 
                        fontWeight: "500" 
                      }}>{order.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;