import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gigs = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stunning concept art",
      price: "59.99",
      sales: 13,
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Ai generated concept art",
      price: "120.99",
      sales: 41,
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "High quality digital character",
      price: "79.99",
      sales: 55,
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Illustration hyper realistic painting",
      price: "119.99",
      sales: 29,
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Original ai generated digital art",
      price: "59.99",
      sales: 34,
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Text based ai generated art",
      price: "110.99",
      sales: 16,
    },
  ];

  return (
    <div className="myGigs bg-gray-100 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-gray-500 text-3xl font-light">{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md">Add New Gig</button>
            </Link>
          )}
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Image</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Title</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Price</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Sales</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => (
              <tr key={gig.id}>
                <td className="px-4 py-2 border border-gray-300">
                  <img
                    className="w-16 h-16 object-cover"
                    src={gig.image}
                    alt=""
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300">{gig.title}</td>
                <td className="px-4 py-2 border border-gray-300">{gig.price}</td>
                <td className="px-4 py-2 border border-gray-300">{gig.sales}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img className="w-6 h-6 object-contain" src="./img/delete.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
