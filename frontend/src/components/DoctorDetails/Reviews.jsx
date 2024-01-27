import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import ReactStars2 from "react-stars";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const { state } = useContext(AuthContext);

  return (
    <div className="bg-slate-100 p-5 flex-col space-y-3 border border-slate-200">
      <h1 className="font-bold text-lg">Reviews</h1>

      <div className="flex-col space-y-5 p-5">
        <div className="review">
          <div className="flex justify-between space-y-2">
            <div className="flex items-center space-x-5">
              <Avatar className="w-[30px] h-[40px]">
                <AvatarImage src={state?.user.photo} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="font-bold">{state?.user.name} </p>
            </div>
            <div>
              <ReactStars2
                count={5}
                size={24}
                color2={"#ffd700"}
                value={2.5}
                edit={false}
              />
            </div>
          </div>

          <div className="pl-12">
            <p className="text-sm">
              The doctor is too good. Can't describe in words.
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between space-y-2">
            <div className="flex items-center space-x-5">
              <Avatar className="w-[30px] h-[40px]">
                <AvatarImage src={state?.user.photo} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="font-bold">{state?.user.name} </p>
            </div>
            <div>
              <ReactStars2
                count={5}
                size={24}
                color2={"#ffd700"}
                value={2.5}
                edit={false}
              />
            </div>
          </div>

          <div className="pl-12">
            <p className="text-sm">
              The doctor is too good. Can't describe in words.
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between space-y-2">
            <div className="flex items-center space-x-5">
              <Avatar className="w-[30px] h-[40px]">
                <AvatarImage src={state?.user.photo} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="font-bold">{state?.user.name} </p>
            </div>
            <div>
              <ReactStars2
                count={5}
                size={24}
                color2={"#ffd700"}
                value={2.5}
                edit={false}
              />
            </div>
          </div>

          <div className="pl-12">
            <p className="text-sm">
              The doctor is too good. Can't describe in words.
            </p>
          </div>
        </div>
      </div>

      {/* post a review */}

      <h1 className="font-bold text-lg">Leave a review</h1>

      <div className="flex-col space-y-5 p-5">
        <Textarea placeholder="Type your review here." />

        <div className="flex justify-between space-y-2">
          <p>Give stars according to your experience : </p>
          <div>
            <ReactStars2 count={5} size={24} color2={"#ffd700"} />
          </div>
        </div>

        <Button className="w-full">Post Review</Button>
      </div>
    </div>
  );
};

export default Reviews;
