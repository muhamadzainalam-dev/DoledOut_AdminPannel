import React from "react";
import { FaChartBar, FaStore, FaUsers } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-around items-center">
          <span className="text-gray-700">Sales Overview</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <FaStore className="text-black text-4xl mr-4" />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Restaurants</h2>
            <p className="text-gray-700">14</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <FaUsers className="text-black text-4xl"/>
          <div className="text-center mr-[26px]">
            <h2 className="text-xl font-semibold">Users</h2>
            <p className="text-gray-700">125</p>
          </div>
        </div>
      </div>
    </div>
  );
}
