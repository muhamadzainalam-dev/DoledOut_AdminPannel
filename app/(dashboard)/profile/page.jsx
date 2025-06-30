import React from "react";
import Logo from "../../images/logo.jpg";
import Image from "next/image";

export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-bold text-green-700">Profile</h1>
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid lightgray",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "gray" }}>Admin Details</h2>
        <Image
          src={Logo}
          alt="Admin Logo"
          style={{ width: "100%", maxWidth: "300px", margin: "auto", marginTop:"40px", marginBottom:"40px"}}
        />
        <p style={{ margin: "10px 0" }}>Email: admin@gmail.com</p>
        <p style={{ color: "gray" }}>This is an admin account</p>
      </div>
    </div>
  );
}
