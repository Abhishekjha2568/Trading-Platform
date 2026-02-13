import React from 'react';
import Dashboard from "./Dashboard"; 
import TopBar from "./TopBar"; 

const Home = () => {
    return (
        <div className="home-wrapper" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
            <TopBar /> 
            <Dashboard />
        </div>
    );
};

export default Home;