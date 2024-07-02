import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="flex justify-center">
      
      <div className="w-[1400px] py-[50px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>
        <table className="w-full">
          <thead>
            <tr className="h-[100px] border-b">
              <th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[100px] bg-[#1dbf730f]">
              <td className="font-semibold p-[10px]">Charley Sharp</td>
              <td className="p-[10px]">
                <Link to="/message/123" className="text-blue-500 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="text-gray-500 p-[10px]">1 hour ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white py-[10px] px-[20px] rounded">Mark as Read</button>
              </td>
            </tr>
            <tr className="h-[100px] bg-[#1dbf730f]">
              <td className="font-semibold p-[10px]">John Doe</td>
              <td className="p-[10px]">
                <Link to="/message/123" className="text-blue-500 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="text-gray-500 p-[10px]">2 hours ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white py-[10px] px-[20px] rounded">Mark as Read</button>
              </td>
            </tr>
            <tr className="h-[100px] border-b">
              <td className="font-semibold p-[10px]">Elinor Good</td>
              <td className="p-[10px]">
                <Link to="/message/123" className="text-blue-500 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="text-gray-500 p-[10px]">1 day ago</td>
            </tr>
            <tr className="h-[100px] border-b">
              <td className="font-semibold p-[10px]">Garner David</td>
              <td className="p-[10px]">
                <Link to="/message/123" className="text-blue-500 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="text-gray-500 p-[10px]">2 days ago</td>
            </tr>
            <tr className="h-[100px]">
              <td className="font-semibold p-[10px]">Troy Oliver</td>
              <td className="p-[10px]">{message.substring(0, 100)}</td>
              <td className="text-gray-500 p-[10px]">1 week ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;