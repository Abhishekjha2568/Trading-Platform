import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material"; // Inka use ab neeche fix kar diya hai
import {
    BarChartOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
    return (
        <div className="watchlist-container">
            <div className="search-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 15px", borderBottom: "1px solid #eee" }}>
                <input type="text" placeholder="Search eg: infy, bse" className="search" style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} />
                <span className="counts" style={{ fontSize: "12px", color: "#999", whiteSpace: "nowrap" }}> {watchlist.length} / 50 </span>
            </div>
            <ul className="list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {watchlist.map((stock, index) => (
                    <WatchListItem stock={stock} key={index} />
                ))}
            </ul>
        </div>
    );
};

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
    const [showOrderWindow, setShowOrderWindow] = useState(false);
    const [orderType, setOrderType] = useState("Buy");

    return (
        <>
            <li 
                onMouseEnter={() => setShowWatchlistActions(true)} 
                onMouseLeave={() => setShowWatchlistActions(false)}
                style={{ borderBottom: "1px solid #f3f3f3", padding: "12px 15px", position: "relative", cursor: "pointer", display: "flex", justifyContent: "space-between", height: "50px", alignItems: "center" }}
            >
                <p style={{ margin: 0, fontSize: "13px", fontWeight: "500", color: stock.isDown ? "#df514c" : "#4caf50" }}>{stock.name}</p>
                {showWatchlistActions ? (
                    <div style={{ position: "absolute", right: "10px", backgroundColor: "#fff", display: "flex", gap: "5px", paddingLeft: "20px" }}>
                        <WatchListActions 
                            onBuyClick={() => { setOrderType("Buy"); setShowOrderWindow(true); }} 
                            onSellClick={() => { setOrderType("Sell"); setShowOrderWindow(true); }} 
                        />
                    </div>
                ) : (
                    <div className="itemInfo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "12px", color: "#999" }}>{stock.percent}</span>
                        {stock.isDown ? <KeyboardArrowDown style={{ fontSize: "16px", color: "#df514c" }} /> : <KeyboardArrowUp style={{ fontSize: "16px", color: "#4caf50" }} />}
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>{stock.price}</span>
                    </div>
                )}
            </li>


            {showOrderWindow && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 2000, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "440px", backgroundColor: "white", borderRadius: "4px", overflow: "hidden", boxShadow: "0 10px 50px rgba(0,0,0,0.3)" }}>
                        <div style={{ backgroundColor: orderType === "Buy" ? "#4184f3" : "#ff5722", padding: "15px 20px", color: "white", display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontWeight: "600" }}>{orderType} {stock.name} x 1 Qty</span>
                            <span style={{ fontSize: "12px" }}>LTP {stock.price}</span>
                        </div>
                        <div style={{ padding: "20px" }}>
                            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                                <label style={{ fontSize: "13px" }}><input type="radio" name="prod" defaultChecked /> Intraday <span style={{color:"#999", fontSize:"10px"}}>MIS</span></label>
                                <label style={{ fontSize: "13px" }}><input type="radio" name="prod" /> Longterm <span style={{color:"#999", fontSize:"10px"}}>CNC</span></label>
                            </div>
                            <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: "block", fontSize: "12px", color: "#999", marginBottom: "5px" }}>Qty</label>
                                    <input type="number" defaultValue="1" style={{ width: "100%", padding: "8px", border: "1px solid #eee" }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: "block", fontSize: "12px", color: "#999", marginBottom: "5px" }}>Price</label>
                                    <input type="number" defaultValue={stock.price} style={{ width: "100%", padding: "8px", border: "1px solid #eee" }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#f9f9f9", padding: "15px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                            <button onClick={() => setShowOrderWindow(false)} style={{ border: "1px solid #ddd", background: "white", padding: "8px 20px", cursor: "pointer", borderRadius: "2px" }}>Cancel</button>
                            <button style={{ backgroundColor: orderType === "Buy" ? "#4184f3" : "#ff5722", color: "white", border: "none", padding: "8px 30px", borderRadius: "2px", fontWeight: "600", cursor: "pointer" }}>{orderType}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const WatchListActions = ({ onBuyClick, onSellClick }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {/* Tooltip aur Grow ka use yahan fix kar diya gaya hai [cite: 2026-02-12] */}
            <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
                <button onClick={onBuyClick} style={{ backgroundColor: "#4184f3", color: "white", border: "none", padding: "4px 10px", borderRadius: "2px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>B</button>
            </Tooltip>
            
            <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
                <button onClick={onSellClick} style={{ backgroundColor: "#ff5722", color: "white", border: "none", padding: "4px 10px", borderRadius: "2px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>S</button>
            </Tooltip>

            <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
                <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex" }}>
                    <BarChartOutlined style={{ fontSize: "18px", color: "#666" }} />
                </button>
            </Tooltip>

            <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex" }}>
                    <MoreHoriz style={{ fontSize: "18px", color: "#666" }} />
                </button>
            </Tooltip>
        </div>
    );
};

export default WatchList;