import React, { useEffect, useRef, useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs flex justify-center">
      <div className="container w-11/12 md:w-4/5 lg:w-3/5">
        <span className="breadcrumbs text-sm font-light text-gray-500 uppercase">
          Liverr {">"} Graphics & Design {">"}
        </span>
        <h1 className="text-3xl font-bold mt-4 mb-2">AI Artists</h1>
        <p className="text-gray-600 font-light mb-4">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu flex justify-between items-center mb-6">
          <div className="left flex items-center gap-4 text-gray-500 font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-2 border border-gray-300 rounded outline-none"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-2 border border-gray-300 rounded outline-none"
            />
            <button
              onClick={apply}
              className="bg-green-500 text-white py-2 px-4 rounded font-medium"
            >
              Apply
            </button>
          </div>
          <div className="right relative flex items-center gap-4">
            <span className="sortBy text-gray-500 font-light">Sort by</span>
            <span className="sortType font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
              className="w-4 cursor-pointer"
            />
            {open && (
              <div className="rightMenu absolute top-10 right-0 bg-white border border-gray-300 rounded p-4 flex flex-col gap-4">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="cursor-pointer"
                  >
                    Best Selling
                  </span>
                )}
                <span onClick={() => reSort("sales")} className="cursor-pointer">
                  Popular
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="cards flex flex-wrap justify-between">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong"
            : Array.isArray(data)
            ? data.map((gig) => <GigCard key={gig._id} item={gig} />)
            : "No data available"}
        </div> 
      </div>
    </div>
  );
}

export default Gigs;
