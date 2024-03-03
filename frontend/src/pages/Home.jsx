import React from "react";
import heroBanner from "../assets/images/hero_banner.svg";
import heroImage from "../assets/images/hero_image.svg";
import doctorImage from "../assets/images/doctors.svg";
import medicineImage from "../assets/images/medicine.svg";
import LabImage from "../assets/images/lab.svg";
import faqImage from "../assets/images/faq.svg";
import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

// import { useHistory } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  return (
    <div className="mx-[150px]">
      <div
        className="h-[500px] shadow-lg border-3 border-gray-200"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      <div className="mt-[40px]">
        <h1 className="font-bold text-3xl">Our Services</h1>
        <hr className="my-4 border-gray-600 h-50" />
      </div>

      <div className="Services flex items-center justify-between">
        <div className="w-1/3 px-5 hover:scale-105 transition-transform">
          <img src={doctorImage} className="w-1/2 h-[200px] mx-auto" alt="" />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center">Find a Doctor</h1>
            <p className="text-xs text-center">
              We help patients reducing the hassles the face in our conventional
              medical systems
            </p>
            <Button
              onClick={() => {
                navigate("/doctors");
              }}
              className="my-2 h-12 w-12 rounded-full"
            >
              <BsArrowRight className="h-10 w-10" />
            </Button>
          </div>
        </div>
        <div className="w-1/3 px-5 hover:scale-105 transition-transform">
          <img src={medicineImage} className="w-1/2 h-[200px] mx-auto" alt="" />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center">MediShop</h1>
            <p className="text-xs text-center">
              We help patients reducing the hassles the face in our conventional
              medical systems
            </p>
            <Button
              onClick={() => {
                navigate("/medishop");
              }}
              className="my-2 h-12 w-12 rounded-full"
            >
              <BsArrowRight className="h-10 w-10" />
            </Button>
          </div>
        </div>
        <div className="w-1/3 px-5 hover:scale-105 transition-transform">
          <img src={LabImage} className="w-1/2 h-[200px] mx-auto" alt="" />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center">MediLab</h1>
            <p className="text-xs text-center">
              We help patients reducing the hassles the face in our conventional
              medical systems
            </p>
            <Button className="my-2 h-12 w-12 rounded-full"  >
            {/* onClick={() => history.push('/medilab')} */}
              <BsArrowRight className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-[40px]">
        <h1 className="font-bold text-3xl">Feedbacks</h1>
        <hr className="my-4 border-gray-600 h-50" />
      </div>

      <div className="Feedback flex justify-between">
        <div className="w-1/4 p-5 ">
          <FaQuoteRight className="h-5 w-5" />
          <p className="m-2">
          This doctor appointment app has truly simplified my healthcare experience. Its intuitive interface allows for easy appointment scheduling with my preferred doctors, making the entire process efficient and stress-free. Managing my medical appointments has never been this straightforward, and I highly recommend this app for anyone seeking a user-friendly solution for booking and keeping track of their healthcare visits.
          </p>
          <div>
            <h1 className="font-bold">Farhan Shahriar</h1>
            <h1 className="">Patient</h1>
          </div>
        </div>
        <div className="w-1/4 p-5">
          <FaQuoteRight className="h-5 w-5" />
          <p className="m-2">
          This all-in-one doctor appointment app has been a game-changer for me. Not only does it make scheduling medical appointments a breeze, but the added lab appointment module has made managing diagnostic tests incredibly convenient. Plus, the e-commerce feature for purchasing medicines is a brilliant addition, making it a one-stop solution for all my healthcare needs.
          </p>
          <div>
            <h1 className="font-bold">Hasan Mahmud</h1>
            <h1 className="">Patient</h1>
          </div>
        </div>
        <div className="w-1/4 p-5">
          <FaQuoteRight className="h-5 w-5" />
          <p className="m-2">
          Managing a diagnostic lab has become remarkably efficient with this doctor appointment app. The lab appointment module seamlessly integrates with our workflow, allowing for streamlined coordination of tests. The user-friendly interface has simplified the process for both staff and patients, enhancing overall efficiency. It's a valuable tool that has significantly improved the operations of our diagnostic lab, making it an essential asset for any lab manager looking to optimize their workflow.
          </p>
          <div>
            <h1 className="font-bold">Tonmoy Hasan</h1>
            <h1 className="">Lab Agent</h1>
          </div>
        </div>
        <div className="w-1/4 p-5">
          <FaQuoteRight className="h-5 w-5" />
          <p className="m-2">
          This doctor appointment app has significantly improved the efficiency of my practice. The seamless interface simplifies appointment scheduling for patients, and the lab appointment module enhances coordination for diagnostic tests. It's become an indispensable tool in my clinic, streamlining communication and optimizing patient care. Highly recommended for fellow healthcare professionals seeking an effective practice management solution.
          </p>
          <div>
            <h1 className="font-bold">Khaled Mahmud</h1>
            <h1 className="">Doctor</h1>
          </div>
        </div>
      </div>

      <div className="mt-[40px]">
        <h1 className="font-bold text-3xl">FAQs</h1>
        <hr className="my-4 border-gray-600 h-50" />
      </div>

      <div className="flex items-center">
        <div className="w-1/2">
          <img src={faqImage} className="h-[300px] mx-auto" alt="" />
        </div>
        <div className="w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="hover:scale-105 transition-transform"
              value="item-1"
            >
              <AccordionTrigger>
                Is the platform free of charge?
              </AccordionTrigger>
              <AccordionContent>
                Yes. you can use it for free currently as the platform in in
                developing phase
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="hover:scale-105 transition-transform"
              value="item-2"
            >
              <AccordionTrigger>
                What are the supported platforms for transaction?
              </AccordionTrigger>
              <AccordionContent>
                Currently, it is free of charges. But, we are planning to use
                Bkash, Nagad as transaction agent
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="hover:scale-105 transition-transform"
              value="item-3"
            >
              <AccordionTrigger>
                What is the role for a medilab agent?
              </AccordionTrigger>
              <AccordionContent>
                They can provide the tests available and customers can take
                appointment to take the test
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="hover:scale-105 transition-transform"
              value="item-4"
            >
              <AccordionTrigger>
                Is there any online delivery system on medicine purchase?
              </AccordionTrigger>
              <AccordionContent>
                Currently, there is no option for delivery. But we will add the
                service hopefully.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;
