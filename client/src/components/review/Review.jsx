import React from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({review}) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );
  console.log(55);
  return (
    
    <div>
      {isLoading?("loading"):error?("error"):(
        <>
        <hr className="border border-gray-200 mb-[20px]" />
      <div className="item flex flex-col gap-[20px] my-[20px]">
        <div className="user flex items-center">
          <img
            className="pp h-[50px] w-[50px] rounded-full"
            src={data.img || "/img/check.png"}
            alt=""
          />
          <div className="info flex items-center gap-[10px] text-gray-500">
            <div className="country flex items-center gap-[10px]">
              <img
                className="w-[20px]"
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>{data.country}</span>
            </div>
          </div>
        </div>
        <div className="stars flex gap-[5px]">
          {/* <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
          <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
          <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
          <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
          <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" /> */}
          {/* <span className="text-[14px] font-bold text-[#ffc108]">5</span> */}
          {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" key={i} />
          ))}
          <span className="text-[14px] font-bold text-[#ffc108]">{review.star}</span> 
        </div>
        <p className="leading-[25px] text-[#555]">
          {review.desc}
        </p>
        <div className="helpful flex items-center gap-[5px] text-gray-500">
          <span>Helpful?</span>
          <img
            className="cursor-pointer h-[14px] w-[14px]"
            src="/img/like.png"
            alt=""
          />
          <span>Yes</span>
          <img
            className="cursor-pointer h-[14px] w-[14px]"
            src="/img/dislike.png"
            alt=""
          />
          <span>No</span>
        </div>
      </div>
        </>
      )}
      
      
    </div>
  );
};

export default Review;
