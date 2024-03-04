import React from "react";

const About = () => {
  return (
    <div className="mx-[180px] mt-[40px] flex-col space-y-2">
      <h1 className="text-4xl font-bold">About</h1>
      <hr className="border border-black" />

      <div className="flex-col space-y-2 space-x-3">
        <p className="text-lg italic text-orange-500">Platform Usecases</p>
        <ul>
          <li>Managing and organizing medical records</li>
          <li>Scheduling appointments with healthcare providers</li>
          <li>Tracking medication and dosage information</li>
          <li>Providing access to educational resources</li>
          <li>Connecting patients with support groups</li>
        </ul>
      </div>

      <div className="flex-col space-y-2 space-x-3">
        <p className="text-lg italic text-orange-500">Contributors</p>
        <ul>
          <li>Protoy Barai,CSE,BUET</li>
          <li>Ahmad Farhan Shahriar Chowdhury,CSE,BUET</li>
          <li>Tareq Ahmed,CSE,BUET</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
