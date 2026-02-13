import React from 'react';

const TopBar = () => {
    return (
        <div className="topbar-container" style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "0 20px",
            borderBottom: "1px solid #eee",
            height: "60px",
            backgroundColor: "white"
        }}>
            <div className="indices-container" style={{ display: "flex", gap: "20px" }}>
                <div className="nifty" style={{ display: "flex", gap: "5px", fontSize: "12px" }}>
                    <p className="index" style={{ fontWeight: "bold", margin: 0 }}>NIFTY 50</p>
                    <p className="index-points" style={{ color: "#4caf50", margin: 0 }}>100.2</p>
                </div>
                <div className="sensex" style={{ display: "flex", gap: "5px", fontSize: "12px" }}>
                    <p className="index" style={{ fontWeight: "bold", margin: 0 }}>SENSEX</p>
                    <p className="index-points" style={{ color: "#4caf50", margin: 0 }}>100.2</p>
                </div>
            </div>
           
        </div>
    );
};

export default TopBar;