import React from "react";

export default function Users() {
  return (
    <div className="max-w-4xl mx-auto p-[43px] m-0 w-full h-full bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-left">
        Users
      </h1>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Filter emails..."
      />
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="text-center bg-none text-gray-800">
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-4 text-gray-500" colSpan="5">
              No results.
            </td>
          </tr>
        </tbody>
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
}
