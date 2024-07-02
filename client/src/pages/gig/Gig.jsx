import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import Reviews from "../../components/Reviews/Reviews";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"], 
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {return res.data}),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {return res.data}),
    enabled: !!userId,
  });

  // if (isLoading || isLoadingUser) return <div>Loading...</div>;
  // if (error || errorUser) return <div>Error loading data</div>;

  return (
    <div className="gig flex justify-center">
      {isLoading?"loading":error?"Something went wrong":(
        <>
          <div className="container w-[1400px] py-[30px] flex gap-[50px]">
            <div className="left flex-[2] flex flex-col gap-[20px]">
              <span className="breadcrumbs font-light uppercase text-[13px] text-[#555]">
                Aerospace {">"} Graphics & Design {">"}
              </span>
              <h1>{data.title}</h1>
              {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user flex items-center gap-[10px]">
                <img
                  className="pp w-[32px] h-[32px] rounded-full object-cover"
                  src={dataUser.img || "/img/check.jpg"}
                  alt=""
                />
                <span className="text-[14px] font-medium">{dataUser.username}</span>
                <div className="stars flex items-center gap-[5px]">
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="stars flex items-center gap-[5px]">
                      {Array(Math.round(data.totalStars / data.starNumber))
                        .fill()
                        .map((item, i) => (
                          <img
                            src="/img/star.png"
                            className="h-[14px] w-[14px]"
                            alt=""
                            key={i}
                          />
                        ))}
                      <span className="text-[14px] font-bold text-[#ffc108]">
                        {Math.round(data.totalStars / data.starNumber)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

            )}
              <Slider
                slidesToShow={1}
                arrowsScroll={1}
                className="slider bg-[#F5F5F5]"
              >
                {data.images.map((img) => (
                  <img
                    key={img}
                    className="max-h-[500px] object-contain"
                    src={img}
                    alt=""
                  />
                ))}
              </Slider>
              <h2 className="font-normal">About This Gig</h2>
              <p className="font-light leading-[25px] text-[#555]">{data.desc}</p>
              <div className="seller mt-[50px] flex flex-col gap-[20px]">
                <h2 className="font-normal">About The Seller</h2>
                <div className="user flex items-center gap-[20px]">
                  <img
                    className="w-[100px] h-[100px] rounded-full object-cover"
                    src={dataUser.img || "/img/.jpg"}
                    alt=""
                  />
                  <div className="info flex flex-col gap-[10px]">
                    <span>{dataUser.username}</span>
                    <div className="stars flex items-center gap-[5px]">
                      {!isNaN(data.totalStars / data.starNumber) && (
                        <div className="stars">
                          {Array(Math.round(data.totalStars / data.starNumber))
                            .fill()
                            .map((item, i) => (
                              <img
                                src="/img/star.png"
                                className="h-[14px] w-[14px]"
                                alt=""
                                key={i}
                              />
                            ))}
                          <span className="text-[14px] font-bold text-[#ffc108]">
                            {Math.round(data.totalStars / data.starNumber)}
                          </span>
                        </div>
                      )}
                    </div>
                    <button className="bg-white rounded border border-gray-400 px-[10px] py-[5px]">
                      Contact Me
                    </button>
                  </div>
                </div>
                <div className="box border border-gray-200 rounded p-[20px] mt-[20px]">
                  <div className="items flex justify-between flex-wrap">
                    <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                      <span className="title font-light">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                      <span className="title font-light">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                      <span className="title font-light">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                      <span className="title font-light">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                      <span className="title font-light">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr className="border border-gray-200 mb-[20px]" />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
              <Reviews gigId={id} />
            </div>
            <div className="right flex-[1] border border-gray-200 p-[20px] rounded">
              <div className="price sticky top-[70px]">
                <h3 className="mb-[10px] font-normal">{data.shortTitle}</h3>
                <h2 className="text-[36px] font-light">$ {data.price}</h2>
              </div>
              <p className="font-light leading-[25px] text-[#555]">
                {data.shortDesc}
              </p>
              <div className="details mt-[30px] flex flex-col gap-[20px]">
                <div className="item flex items-center justify-between text-[13px]">
                  <img src="/img/clock.png" alt="" />
                  <span>{data.deliveryDate} Days Delivery</span>
                </div>
                <div className="item flex items-center justify-between text-[13px]">
                  <img src="/img/recycle.png" alt="" />
                  <span>{data.revisionNumber} Revisions</span>
                </div>
                <div className="item flex items-center justify-between text-[13px]">
                  <span>Enhancement</span>
                  <span>Yes</span>
                </div>
                <div className="item flex items-center justify-between text-[13px]">
                  <span>High resolution</span>
                  <span>Yes</span>
                </div>
                <div className="item flex items-center justify-between text-[13px]">
                  <span>Commercial use</span>
                  <span>Yes</span>
                </div>
              </div>
              <button className="bg-[#1dbf73] text-white font-medium text-[16px] py-[10px] mt-[20px] rounded cursor-pointer hover:bg-[#169f5e]">
                Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Gig;
