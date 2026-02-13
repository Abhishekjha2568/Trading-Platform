import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ 
        display: "flex", 
        width: "100vw", 
        height: "100vh", 
        overflow: "hidden",
        backgroundColor: "#fff" 
    }}>
      
      
      <div style={{ 
          width: "350px", 
          minWidth: "350px", 
          borderRight: "1px solid #eee", 
          height: "100%", 
          overflowY: "auto" 
      }}>
        <WatchList />
      </div>
      
   
      <div className="content-area" style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          overflow: "hidden" 
      }}>
        
     
        <Menu /> 
        
       
        <div className="main-content" style={{ 
            flex: 1, 
            padding: "30px 60px", 
            overflowY: "auto", 
            backgroundColor: "#fff" 
        }}>
          <Routes>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;