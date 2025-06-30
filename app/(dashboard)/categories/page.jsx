import React from "react";
import Image from "next/image";
import Food from "../../images/food.jpg";

export default function Categories() {
  return (
    <div className="w-full mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-700">Categories</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Add Category
        </button>
      </div>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Filter category"
      />
      <table className="w-full table-auto border-collapse text-center rounded-10">
        <thead>
          <tr className="border">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">...</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">BBQ</td>
            <td className="px-4 py-2  text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Burgers</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Chicken</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Seafood</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">American</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Asian</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Italian</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Baked Goods</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 flex justify-center">
              <Image src={Food} alt="Category" className="h-10 w-10" />
            </td>
            <td className="px-4 py-2">Vegan</td>
            <td className="px-4 py-2 text-green-600">Active</td>
            <td className="px-4 py-2">...</td>
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
