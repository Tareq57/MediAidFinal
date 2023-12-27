import React from "react";
import heroBanner from "../assets/images/hero_banner.svg";
import heroImage from "../assets/images/hero_image.svg";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div
      className="h-[500px] mx-[150px] shadow-inner "
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img src={heroImage} alt=""  className="object-fill w-full h-full"/> */}
      <div className="container flex items-center justify-between py-[50px] px-[100px]">
        <div>
          <h1 className="font-bold text-4xl w-[500px]">
            Empowering Health, Enriching Lives, Your Wellness Partner{" "}
          </h1>
          <p className="text-xs">
            We help patients reducing the hassles the face in our conventional
            medical systems
          </p>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold my-[10px]"
          >
            Explore Us
          </Button>
        </div>
        <div>
          <img src={heroImage} alt="" className="object-cover w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
