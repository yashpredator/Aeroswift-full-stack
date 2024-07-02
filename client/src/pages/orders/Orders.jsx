import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders flex justify-center text-gray-500">
      <div className="container w-full max-w-screen-lg py-8">
        <div className="title flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Orders</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer">
                Add New Gig
              </button>
            </Link>
          )}
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              {currentUser.isSeller && (
                <th className="px-4 py-2 border border-gray-300">Buyer</th>
              )}
              <th className="px-4 py-2 border border-gray-300">Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-16 h-16 object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Stunning concept art
              </td>
              <td className="px-4 py-2 border border-gray-300">59.99</td>
              {currentUser.isSeller && (
                <td className="px-4 py-2 border border-gray-300">
                  Maria Anders
                </td>
              )}
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src="./img/message.png"
                  alt=""
                />
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-16 h-16 object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Stunning concept art
              </td>
              <td className="px-4 py-2 border border-gray-300">59.99</td>
              {currentUser.isSeller && (
                <td className="px-4 py-2 border border-gray-300">
                  Maria Anders
                </td>
              )}
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src="./img/message.png"
                  alt=""
                />
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-16 h-16 object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Stunning concept art
              </td>
              <td className="px-4 py-2 border border-gray-300">59.99</td>
              {currentUser.isSeller && (
                <td className="px-4 py-2 border border-gray-300">
                  Maria Anders
                </td>
              )}
              <td className="px-4 py-2 border border-gray-300">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src="./img/message.png"
                  alt=""
                />
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
