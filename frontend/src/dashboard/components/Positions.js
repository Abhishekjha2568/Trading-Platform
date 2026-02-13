import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title" style={{ marginBottom: "25px", color: "#444" }}>Positions ({positions.length})</h3>

      <div className="order-table">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee", color: "#9ba3ad", fontSize: "12px" }}>
              <th style={{ padding: "15px 12px" }}>Product</th>
              <th style={{ padding: "15px 12px" }}>Instrument</th>
              <th style={{ padding: "15px 12px" }}>Qty.</th>
              <th style={{ padding: "15px 12px" }}>Avg.</th>
              <th style={{ padding: "15px 12px" }}>LTP</th>
              <th style={{ padding: "15px 12px" }}>P&L</th>
              <th style={{ padding: "15px 12px" }}>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const pnl = (curValue - stock.avg * stock.qty).toFixed(2);

              return (
                <tr key={index} style={{ borderBottom: "1px solid #eee", fontSize: "13px" }}>
                  {/* Padding badhai gayi hai taaki data bikhra hua na lage */}
                  <td style={{ padding: "20px 12px", color: "#444" }}>{stock.product}</td>
                  <td style={{ padding: "20px 12px", fontWeight: "500" }}>{stock.name}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.qty}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.avg.toFixed(2)}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.price.toFixed(2)}</td>
                  <td style={{ padding: "20px 12px" }} className={isProfit ? "profit" : "loss"}>{pnl}</td>
                  <td style={{ padding: "20px 12px" }} className={isProfit ? "profit" : "loss"}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;