"use client";
import { useState, useEffect } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Account Settings");
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.classList.contains("dark");
    setIsDarkMode(initialColorValue);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-bold text-green-700">Settings</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px",
        }}
      >
        <button
          onClick={() => setActiveTab("Account Settings")}
          style={{
            padding: "10px 20px",
            borderRadius: "10px 0 0 10px",
            border: "1px solid lightgray",
            backgroundColor:
              activeTab === "Account Settings" ? "white" : "#f8f8f8",
            cursor: "pointer",
          }}
        >
          Account Settings
        </button>
        <button
          onClick={() => setActiveTab("Dashboard Settings")}
          style={{
            padding: "10px 20px",
            borderRadius: "0 10px 10px 0",
            border: "1px solid lightgray",
            backgroundColor:
              activeTab === "Dashboard Settings" ? "white" : "#f8f8f8",
            cursor: "pointer",
          }}
        >
          Dashboard Settings
        </button>
      </div>

      {activeTab === "Account Settings" && (
        <div
          style={{
            maxWidth: "550px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid lightgray",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h2>Password</h2>
          <p style={{ color: "gray", margin: "20px" }}>
            Change your password here. After saving, you'll be logged out.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="currentPassword"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Current password
            </label>
            <input
              id="currentPassword"
              type={showPassword ? "text" : "password"}
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
              htmlFor="newPassword"
              style={{ display: "block", marginBottom: "5px" }}
            >
              New password
            </label>
            <input
              id="newPassword"
              type={showPassword ? "text" : "password"}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid lightgray",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={{ marginRight: "10px" }}
            />
            <label htmlFor="showPassword">Show Password</label>
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
              Save password
            </button>
          </div>
        </div>
      )}

      {activeTab === "Dashboard Settings" && (
        <div
          style={{
            maxWidth: "550px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid lightgray",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h2 className="dark:text-gray-300">Dashboard Settings</h2>
          <button
            onClick={toggleDarkMode}
            style={{ margin: "20px 0", padding: "10px 30px" }}
            className="dark:text-gray-300 border dark:border-white border-black rounded-[30px]"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </div>
  );
}
