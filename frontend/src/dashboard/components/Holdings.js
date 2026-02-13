import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);  

  useEffect(() => {

    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title" style={{ marginBottom: "25px", color: "#444" }}>
        Holdings ({allHoldings.length})
      </h3>

      <div className="order-table">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee", color: "#9ba3ad", fontSize: "12px" }}>
              <th style={{ padding: "15px 12px" }}>Instrument</th>
              <th style={{ padding: "15px 12px" }}>Qty.</th>
              <th style={{ padding: "15px 12px" }}>Avg. cost</th>
              <th style={{ padding: "15px 12px" }}>LTP</th>
              <th style={{ padding: "15px 12px" }}>Cur. val</th>
              <th style={{ padding: "15px 12px" }}>P&L</th>
              <th style={{ padding: "15px 12px" }}>Net chg.</th>
              <th style={{ padding: "15px 12px" }}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index} style={{ borderBottom: "1px solid #eee", fontSize: "13px" }}>
                  <td style={{ padding: "20px 12px", fontWeight: "500" }}>{stock.name}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.qty}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.avg.toFixed(2)}</td>
                  <td style={{ padding: "20px 12px" }}>{stock.price.toFixed(2)}</td>
                  <td style={{ padding: "20px 12px" }}>{curValue.toFixed(2)}</td>
                  <td style={{ padding: "20px 12px" }} className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td style={{ padding: "20px 12px" }} className={profClass}>{stock.net}</td>
                  <td style={{ padding: "20px 12px" }} className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer statistics with spacing */}
      <div className="row" style={{ display: "flex", marginTop: "30px", gap: "40px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <div className="col">
          <h5 style={{ margin: "0", fontSize: "20px" }}>29,875.<span>55</span></h5>
          <p style={{ margin: "5px 0", color: "#999", fontSize: "12px" }}>Total investment</p>
        </div>
        <div className="col">
          <h5 style={{ margin: "0", fontSize: "20px" }}>31,428.<span>95</span></h5>
          <p style={{ margin: "5px 0", color: "#999", fontSize: "12px" }}>Current value</p>
        </div>
        <div className="col">
          <h5 style={{ margin: "0", fontSize: "20px", color: "#4caf50" }}>1,553.40 (+5.20%)</h5>
          <p style={{ margin: "5px 0", color: "#999", fontSize: "12px" }}>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;