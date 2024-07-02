import React, { useState } from "react";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile,setsingleFile]=useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/mygigs")
  };

  return (
    <div className="add flex justify-center">
      <div className="container w-full max-w-6xl py-10">
        <h1 className="text-gray-500 font-light mb-8">Add New Gig</h1>
        <div className="sections flex justify-between gap-20">
          <div className="info flex flex-col justify-between w-1/2">
            <label className="text-gray-500 text-lg mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              
            />
            <label className="text-gray-500 text-lg mb-2" htmlFor="cats">Category</label>
            <select name="cats" id="cats" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className="text-gray-500 text-lg mb-2" htmlFor="cover-image">Cover Image</label>
            <input type="file" id="cover-image" className="input mb-4" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="upload-images">Upload Images</label>
            <input type="file" id="upload-images" multiple className="input mb-4" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="description">Description</label>
            <textarea
              placeholder="Brief descriptions to introduce your service to customers"
              className="input h-40 mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            <button className="button bg-green-500 py-3 px-6">Create</button>
          </div>
          <div className="details flex flex-col justify-between w-1/2">
            <label className="text-gray-500 text-lg mb-2" htmlFor="service-title">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="short-description">Short Description</label>
            <textarea
              placeholder="Short description of your service"
              className="input h-40 mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            <label className="text-gray-500 text-lg mb-2" htmlFor="delivery-time">Delivery Time (e.g. 3 days)</label>
            <input type="number" id="delivery-time" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="revision-number">Revision Number</label>
            <input type="number" id="revision-number" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="add-features">Add Features</label>
            <input type="text" placeholder="e.g. page design" className="input mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="e.g. file uploading" className="input mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="e.g. setting up a domain" className="input mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="e.g. hosting" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label className="text-gray-500 text-lg mb-2" htmlFor="price">Price</label>
            <input type="number" id="price" className="input mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
