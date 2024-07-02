import React from "react";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: (error) => {
      console.error('Error posting review:', error.response?.data || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div>
      <div className="reviews mt-[50px]">
        <h2 className="font-normal">Reviews</h2>
        {isLoading
          ? "loading"
          : error
          ? "Something went wrong!"
          : data.map((review) => <Review key={review._id} review={review} />)}

        <hr className="border border-gray-200 mb-[20px]" />
        {/* <div className="item flex flex-col gap-[20px] my-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-full"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info flex items-center gap-[10px] text-gray-500">
                  <div className="country flex items-center gap-[10px]">
                    <img
                      className="w-[20px]"
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                      alt=""
                    />
                    <span>United Kingdom</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                <span className="text-[14px] font-bold text-[#ffc108]">5</span>
              </div>
              <p className="leading-[25px] text-[#555]">
                Great seller, very communicative and willing to go the extra mile
                to make sure everything is perfect! The AI-generated art was
                exactly what I was looking for, and I couldn't be happier with
                the final product.
              </p>
              <div className="helpful flex items-center gap-[5px] text-gray-500">
                <span>Helpful?</span>
                <img className="cursor-pointer h-[14px] w-[14px]" src="/img/like.png" alt="" />
                <span>Yes</span>
                <img className="cursor-pointer h-[14px] w-[14px]" src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div> */}

        <div className="add">
          <h3>Add a review</h3>
          <form action="" className="addForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="write your opinion" />
            <select name="" id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
