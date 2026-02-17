import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2">Create a Support Ticket</h1>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-plus-circle"></i> Account Support
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account Registration Issues
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Profile Setup Help
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Login Problems
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Password Reset
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Getting Started Guide
                    </a>
                </div>

                <div className="col-4 p-5 mt-2 mb-3">
                    <h4>
                        <i className="fa fa-user"></i> User Account
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account Settings Update
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Bank Details Management
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Profile Changes
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Portfolio Access Issues
                    </a>
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-bar-chart"></i> Trading Simulation
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Order Placement Issues
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Market Data Delay
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Trading FAQs
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Portfolio Updates Not Showing
                    </a>
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-credit-card"></i> Funds & Wallet
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Virtual Fund Addition
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Wallet Balance Issues
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Transaction History
                    </a>
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-circle-o-notch"></i> Dashboard Help
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Reports & Analytics
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Portfolio Insights
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Trading History
                    </a>
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-life-ring"></i> Technical Support
                    </h4>
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        App Performance Issues
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Bug Reporting
                    </a><br />
                    <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Feature Requests
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
