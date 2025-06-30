"use client";

import React, { useState } from "react";

const Transactions = () => {
  const [activeSection, setActiveSection] = useState("Income");

  const renderTableRows = () => {
    const data = {
      Income: [
        {
          id: 62,
          grossAmount: 500,
          tax: 50,
          netAmount: 550,
          appFee: 55,
          type: "CREDIT",
        },
        {
          id: 63,
          grossAmount: 500,
          tax: 50,
          netAmount: 550,
          appFee: 55,
          type: "CREDIT",
        },
        {
          id: 80,
          grossAmount: 500,
          tax: 50,
          netAmount: 550,
          appFee: 55,
          type: "CREDIT",
        },
      ],
      Refunds: [
        {
          id: 84,
          grossAmount: 250,
          tax: 25,
          netAmount: 275,
          appFee: 27.5,
          type: "CREDIT",
        },
        {
          id: 85,
          grossAmount: 250,
          tax: 25,
          netAmount: 275,
          appFee: 27.5,
          type: "CREDIT",
        },
        {
          id: 86,
          grossAmount: 500,
          tax: 50,
          netAmount: 550,
          appFee: 55,
          type: "CREDIT",
        },
      ],
    };

    return data[activeSection].map((row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.grossAmount}</td>
        <td>{row.tax}</td>
        <td>{row.netAmount}</td>
        <td>{row.appFee}</td>
        <td>{row.type}</td>
      </tr>
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-bold text-green-700">Transactions</h1>
      <div
        style={{ display: "flex", margin: "50px", justifyContent: "center" }}
      >
        <button
          onClick={() => setActiveSection("Income")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "Income" ? "#ddd" : "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            display: "flex",
            textalign: "center",
            justifycontent: "center",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          Income
        </button>
        <button
          onClick={() => setActiveSection("Refunds")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "Refunds" ? "#ddd" : "#fff",
            border: "1px solid #ddd",
            cursor: "pointer",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          Refunds
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
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "25px 0 50px 0",
        }}
        className="border border-gray-300 text-center"
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Order Id
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Gross Amount
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Tax
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Net Amount
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Application Fee
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              Transaction Type
            </th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg mr-2 cursor-not-allowed"
          disabled
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed"
          disabled
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Transactions;
