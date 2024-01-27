import React from "react";
import Symptoms from "@/assets/images/symptoms.svg";
import { Input } from "@/components/ui/input.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tests from "@/assets/images/tests.svg";
import { Button } from "@/components/ui/button";
import Advice from "@/assets/images/advice.svg";
import Medicines from "@/assets/images/medicines.svg";
import Doses from "@/assets/images/Doses.svg";
import Details from "@/assets/images/details.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const Prescription = () => {
  const { state } = useContext(AuthContext);
  
  return (
    <div className="flex mx-[180px] mt-[40px] space-x-10 ">
      <div className="w-1/4 flex-col space-y-5">
        
        <Card>
          <CardHeader>
            <CardTitle>Symptoms</CardTitle>
            <CardDescription>Short detail of the symptoms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Symptoms} className="w-[20px] h-[20px]" />
              <p>Onnek Mathabetha Mama</p>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Symptoms} className="w-[20px] h-[20px]" />
              <p>Onnek Mathabetha Mama</p>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Symptoms} className="w-[20px] h-[20px]" />
              <p>Onnek Mathabetha Mama</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex-col space-y-3">
              <Input className="w-[220px]"></Input>
              <Button className="w-full">Add Symptom</Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tests</CardTitle>
            <CardDescription>Short detail of the tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Tests} className="w-[20px] h-[20px]" />
              <p>RTPCR Test</p>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Tests} className="w-[20px] h-[20px]" />
              <p>Blood Test</p>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Tests} className="w-[20px] h-[20px]" />
              <p>Onnek Mathabetha Mama</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex-col space-y-3">
              <Input className="w-[220px]"></Input>
              <Button className="w-full">Add Test</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="border-r border-gray-500 h-full min-h-[500px]"></div>
      <div className="w-2/4 ">
        <Card>
          <CardHeader>
            <Card>
              <CardHeader>
                <CardTitle>Patient Details : </CardTitle>
              </CardHeader>
              <CardContent className="flex-col space-y-1">
                <div className="flex justify-between">
                  <p>Name : Tareq Ahmed</p>
                  <p>Weight : 20</p>
                </div>
                <div className="flex justify-between">
                  <p>Age : 20</p>
                  <p>Date : 24 January, 2024</p>
                </div>
              </CardContent>
            </Card>
          </CardHeader>
          <CardContent>
            <Card className="flex-col space-y-2">
              <CardHeader>
                <CardTitle>Rx : </CardTitle>
                <CardDescription>
                  Doses and details of prescribed Medicines
                </CardDescription>
                <hr className="border border-black" />
              </CardHeader>
              <CardContent>
                <div className="flex-col space-y-1">
                  <div className="flex space-x-3">
                    <img src={Medicines} className="w-[20px] h-[20px]" />
                    <p>Tab : Napa Extend</p>
                  </div>
                  <div className="flex space-x-3">
                    <img src={Doses} className="w-[20px] h-[20px] " />
                    <p className="text-red-700 text-base"> Doses : 1 + 1 + 1</p>
                  </div>
                  <div className="flex space-x-3">
                    <img src={Details} className="w-[18px] h-[18px] " />
                    <p className="text-sm italic">
                      Details:30 minutes after meal
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <hr className="border border-slate-200" />
              </CardContent>
              <CardContent>
                <div className="flex-col space-y-1">
                  <div className="flex space-x-3">
                    <img src={Medicines} className="w-[20px] h-[20px]" />
                    <p>Tab : Napa Extend</p>
                  </div>
                  <div className="flex space-x-3">
                    <img src={Doses} className="w-[20px] h-[20px] " />
                    <p className="text-red-700 text-base"> Doses : 1 + 1 + 1</p>
                  </div>
                  <div className="flex space-x-3">
                    <img src={Details} className="w-[18px] h-[18px] " />
                    <p className="text-sm italic">
                      Details:30 minutes after meal
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <hr />
              </CardContent>
              <CardContent>
                <div className="flex-col space-y-3">
                  <div className="flex space-x-2 justify-between items-center">
                    <p>Name:</p>
                    <Input
                      placeholder="Enter name of the medicine"
                      className="w-[270px]"
                    ></Input>
                  </div>
                  <div className="flex space-x-2 justify-between items-center">
                    <p>Category:</p>
                    <Input
                      placeholder="Enter Medicine Category"
                      className="w-[270px]"
                    ></Input>
                  </div>
                  <div className="flex space-x-2 justify-between items-center">
                    <p>Type:</p>
                    <Select>
                      <SelectTrigger className="border-black w-[270px]">
                        <SelectValue placeholder="Select medicine type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doctor">Tablet</SelectItem>
                        <SelectItem value="patient">Syrup</SelectItem>
                        <SelectItem value="patient">Capsule</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex space-x-2 justify-between items-center">
                    <p>Doses:</p>
                    <div className="flex items-center justify-between w-[270px]">
                      <Input placeholder="Morning"></Input>
                      <p>+</p>
                      <Input placeholder="Noon" ></Input>
                      <p>+</p>
                      <Input placeholder="Night"></Input>
                    </div>
                  </div>
                  <div className="flex space-x-2 justify-between items-center">
                    <p>Details:</p>
                    <Input placeholder="Enter details of the medicine" className="w-[270px]"></Input>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                  <Button className="w-full">Add Medicine</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div className="border-r border-gray-500 h-full min-h-[500px]"></div>
      <div className="w-1/4 flex-col space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Advices</CardTitle>
            <CardDescription>Short detail of the tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Advice} className="w-[20px] h-[20px]" />
              <p>RTPCR Test</p>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex space-x-3">
              <img src={Advice} className="w-[20px] h-[20px]" />
              <p>Blood Test</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex-col space-y-3">
              <Input className="w-[220px]"></Input>
              <Button className="w-full">Add Advice</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Prescription;
