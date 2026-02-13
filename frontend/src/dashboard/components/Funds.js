import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
  
      <div className="funds" style={{ 
        padding: "20px 0", 
        borderBottom: "1px solid #eee", 
        display: "flex", 
        alignItems: "center", 
        gap: "20px",
        marginBottom: "30px" 
      }}>
        <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
          Instant, zero-cost fund transfers with UPI
        </p>
        <Link className="btn btn-green" style={{ 
          backgroundColor: "#4caf50", color: "white", padding: "8px 20px", 
          borderRadius: "4px", textDecoration: "none", fontSize: "13px", fontWeight: "600" 
        }}>Add funds</Link>
        <Link className="btn btn-blue" style={{ 
          backgroundColor: "#4184f3", color: "white", padding: "8px 20px", 
          borderRadius: "4px", textDecoration: "none", fontSize: "13px", fontWeight: "600" 
        }}>Withdraw</Link>
      </div>


      <div className="row" style={{ display: "flex", gap: "50px" }}>
        
   
        <div className="col" style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
             <p style={{ margin: 0, fontSize: "18px", color: "#444" }}>Equity</p>
          </div>

          <div className="table" style={{ width: "100%" }}>
            
            <FundDataRow label="Available margin" value="4,043.10" color="#4184f3" bold />
            <FundDataRow label="Used margin" value="3,757.30" />
            <FundDataRow label="Available cash" value="4,043.10" bold />
            
            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "15px 0" }} />
            
            <FundDataRow label="Opening Balance" value="4,043.10" />
            <FundDataRow label="Payin" value="4064.00" />
            <FundDataRow label="SPAN" value="0.00" />
            <FundDataRow label="Delivery margin" value="0.00" />
            <FundDataRow label="Exposure" value="0.00" />
            <FundDataRow label="Options premium" value="0.00" />
            
            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "15px 0" }} />
            
            <FundDataRow label="Collateral (Liquid funds)" value="0.00" />
            <FundDataRow label="Collateral (Equity)" value="0.00" />
            <FundDataRow label="Total Collateral" value="0.00" />
          </div>
        </div>


        <div className="col" style={{ flex: 1 }}>
          <div style={{ padding: "40px", border: "1px solid #eee", borderRadius: "4px", textAlign: "center", marginTop: "45px" }}>
            <p style={{ color: "#666", marginBottom: "20px", fontSize: "14px" }}>
              You don't have a commodity account
            </p>
            <Link className="btn btn-blue" style={{ 
               backgroundColor: "#4184f3", color: "white", padding: "10px 25px", 
               borderRadius: "4px", textDecoration: "none", fontSize: "13px" 
            }}>Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};


const FundDataRow = ({ label, value, color = "#444", bold = false }) => (
  <div style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    padding: "12px 0", 
    borderBottom: "1px solid #f9f9f9",
    fontSize: "14px"
  }}>
    <p style={{ margin: 0, color: "#666" }}>{label}</p>
    <p style={{ 
      margin: 0, 
      color: color, 
      fontWeight: bold ? "700" : "400",
      fontSize: bold ? "16px" : "14px"
    }}>{value}</p>
  </div>
);

export default Funds;