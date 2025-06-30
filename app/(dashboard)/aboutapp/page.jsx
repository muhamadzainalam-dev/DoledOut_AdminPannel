import React from "react";

const AboutApp = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between mb-10">
        <h1 className="text-4xl font-bold text-green-700">About App</h1>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Update About
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          Welcome to the forefront of culinary innovation with Doled Out! We’re
          not just an app – we’re a movement, dedicated to revolutionizing the
          way we think about food waste. Picture this: tantalizing dishes from
          your favorite restaurants, all at discounted prices, waiting to be
          savored and enjoyed. That’s the magic of Doled Out.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          Our mission? It’s simple yet profound: to combat food wastage while
          tantalizing your taste buds and lightening the load on your wallet.
          Through the power of technology and a shared commitment to
          sustainability, we’re reshaping the experience by giving the leftovers
          to the ones in need. But Doled Out isn’t just about saving the planet
          – although that’s a pretty fantastic bonus.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          Our mission? It’s simple yet profound: to combat food wastage while
          tantalizing your taste buds and lightening the load on your wallet.
          Through the power of technology and a shared commitment to
          sustainability, we’re reshaping the experience by giving the leftovers
          to the ones in need. But Doled Out isn’t just about saving the planet
          – although that’s a pretty fantastic bonus.
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
