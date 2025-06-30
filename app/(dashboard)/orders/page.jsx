"use client";

import React, { useState } from "react";

const Orders = () => {
  const [activeSection, setActiveSection] = useState("Cancelled");

  const ordersData = {
    Cancelled: [
      {
        orderId: 101,
        grossAmount: 500,
        tax: 50,
        netAmount: 550,
        status: "Paid",
        cancelReason: "test",
      },
    ],
    InProcess: [
      {
        orderId: 102,
        grossAmount: 500,
        tax: 50,
        netAmount: 550,
        status: "Paid",
        cancelReason: "N/A",
      },
      {
        orderId: 100,
        grossAmount: 175,
        tax: 17.5,
        netAmount: 192.5,
        status: "Paid",
        cancelReason: "N/A",
      },
      {
        orderId: 92,
        grossAmount: 500,
        tax: 50,
        netAmount: 550,
        status: "Paid",
        cancelReason: "N/A",
      },
    ],
    Completed: [
      {
        orderId: 103,
        grossAmount: 175,
        tax: 17.5,
        netAmount: 192.5,
        status: "Paid",
        cancelReason: "N/A",
      },
    ],
    PickedUp: [],
    Pending: [
      {
        orderId: 102,
        grossAmount: 500,
        tax: 50,
        netAmount: 550,
        status: "Paid",
        cancelReason: "N/A",
      },
      {
        orderId: 100,
        grossAmount: 175,
        tax: 17.5,
        netAmount: 192.5,
        status: "Paid",
        cancelReason: "N/A",
      },
      {
        orderId: 92,
        grossAmount: 500,
        tax: 50,
        netAmount: 550,
        status: "Paid",
        cancelReason: "N/A",
      },
    ],
  };

  const renderTableRows = () => {
    return ordersData[activeSection].map((order, index) => (
      <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
        <td style={{ padding: "10px", textAlign: "left" }}>{order.orderId}</td>
        <td style={{ padding: "10px", textAlign: "left" }}>
          {order.grossAmount}
        </td>
        <td style={{ padding: "10px", textAlign: "left" }}>{order.tax}</td>
        <td style={{ padding: "10px", textAlign: "left" }}>
          {order.netAmount}
        </td>
        <td
          style={{
            padding: "10px",
            textAlign: "left",
            color: "#00a000",
            fontWeight: "bold",
          }}
        >
          {order.status}
        </td>
        <td style={{ padding: "10px", textAlign: "left" }}>
          {order.cancelReason}
        </td>
        <td style={{ padding: "10px", textAlign: "center" }}>...</td>
      </tr>
    ));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-700">Orders</h1>
      <div className="flex justify-between mt-[35px] mb-[35px]">
        <button
          onClick={() => setActiveSection("Cancelled")}
          className="bg-white p-[7px] rounded-[11px] w-40"
        >
          Cancelled
        </button>
        <button
          onClick={() => setActiveSection("InProcess")}
          className="bg-white p-[7px] rounded-[11px] w-40"
        >
          In process
        </button>
        <button
          onClick={() => setActiveSection("Completed")}
          className="bg-white p-[7px] rounded-[11px] w-40"
        >
          Completed
        </button>
        <button
          onClick={() => setActiveSection("PickedUp")}
          className="bg-white p-[7px] rounded-[11px] w-40"
        >
          Picked up
        </button>
        <button
          onClick={() => setActiveSection("Pending")}
          className="bg-white p-[7px] rounded-[11px] w-40"
        >
          Pending
        </button>
      </div>
      <div>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Filter Order Id"
        />
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
        className="border border-gray-300"
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>Order Id</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Gross Amount</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Tax</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Net Amount</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", textAlign: "left" }}>
              Cancel Reason
            </th>
            <th style={{ padding: "10px", textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "8px 16px",
            marginRight: "10px",
          }}
        >
          Previous
        </button>
        <button
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "8px 16px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
