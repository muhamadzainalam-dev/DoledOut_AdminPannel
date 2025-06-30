"use client";
import { useState } from "react";

export default function SendNotifications() {
  const [activeTab, setActiveTab] = useState("Users");

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-bold text-green-700">Send Notification</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "55px",
        }}
      >
        <button
          onClick={() => setActiveTab("Users")}
          style={{
            padding: "10px 30px",
            borderRadius: "5px 0 0 5px",
            border: "1px solid lightgray",
            backgroundColor: activeTab === "Users" ? "white" : "#f8f8f8",
            cursor: "pointer",
          }}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("Business")}
          style={{
            padding: "10px 20px",
            borderRadius: "0 5px 5px 0",
            border: "1px solid lightgray",
            backgroundColor: activeTab === "Business" ? "white" : "#f8f8f8",
            cursor: "pointer",
          }}
        >
          Business
        </button>
      </div>
      <div
        style={{
          maxWidth: "550px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid lightgray",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Send</h2>
        <p style={{ textAlign: "center", color: "gray" }}>Send Notifications</p>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
