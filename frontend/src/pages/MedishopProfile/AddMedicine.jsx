import React from "react";
import { useState, useEffect, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthContext from "@/context/AuthContext";
import { addDays } from "date-fns";
import { BASE_URL } from "@/config";
import { useToast } from "@/components/ui/use-toast";
import uploadImagetoCloudinary from "@/utils/uploadCloudinary";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/assets/gifs/loader.gif";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AddSlots = () => {
  const { state } = useContext(AuthContext);
  const id = state?.user._id;

  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const [medicine, setMedicine] = useState({
    name: "",
    type: "",
    category: "",
    manufacturer: state.user._id,
    image: "",
    overview: "",
  });

  const [pricings, setPricings] = useState([]);
  const [pricing, setPricing] = useState({
    unit: "",
    amount: "",
  });

  const handleChange = (name, value) => {
    setMedicine({ ...medicine, [name]: value });
  };

  console.log(medicine);

  const handleAddMedicine = async (e) => {
    console.log("hi\n");
    e.preventDefault();

    let putdata = medicine;
    putdata.prices = pricings;

    const res = await fetch(`${BASE_URL}/medicine`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(putdata),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message);
    } else {
      toast({
        title: "Medicine added successfully",
        description: "You can view your medicines in all medicines",
      });
    }
    console.log(result);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setLoading(true);
    const data = await uploadImagetoCloudinary(file);
    setLoading(false);

    toast({
      title: "Image Uploaded Successfully",
      description: "Image upload done, go for add medicine",
    });

    console.log(data.url);
    setMedicine({ ...medicine, image: data.url });
  };

  console.log(pricings);

  return (
    <div className="flex-col space-y-10 p-2">
      <h1 className="font-bold text-3xl">Add Medicine</h1>
      <hr className="border-black" />
      <div className="flex-col space-y-1">
        <label className="font-medium leading-none" htmlFor="">
          Name :
        </label>

        <Input
          value={medicine.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name of the medicine"
        ></Input>
      </div>

      <div className="flex-col space-y-1">
        <label className="font-medium leading-none" htmlFor="">
          Type :
        </label>

        <Input
          value={medicine.type}
          onChange={(e) => handleChange("type", e.target.value)}
          placeholder="Name of the medicine"
        ></Input>
      </div>

      <div className="flex-col space-y-1">
        <label className="font-medium leading-none" htmlFor="">
          Category :
        </label>

        <Input
          value={medicine.category}
          onChange={(e) => handleChange("category", e.target.value)}
          placeholder="Name of the medicine"
        ></Input>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" onChange={handleFileChange}></Input>
        <div className="flex items-center justify-center">
          {loading && <img src={Loader} alt="" className="w-[20px] h-[20px]" />}
        </div>
      </div>

      <div className="flex-col space-y-1">
        <label className="font-medium leading-none" htmlFor="">
          Overview :
        </label>

        <Textarea
          value={medicine.overview}
          onChange={(e) => handleChange("overview", e.target.value)}
          placeholder="Name of the medicine"
        ></Textarea>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pricing Details</CardTitle>
          <CardDescription>
            Short detail of the medicine pricing
          </CardDescription>
        </CardHeader>
        {pricings.map((pricing, index) => (
          <CardContent key={index}>
            <div className="flex space-x-10">
              {/* <img src={Symptoms} className="w-[20px] h-[20px]" /> */}

              <p>Unit : {pricing.unit} </p>

              <p>Price : {pricing.amount}</p>
            </div>
          </CardContent>
        ))}
      </Card>

      <div className="flex justify-between">
        <div className="flex-col space-y-1 w-1/4">
          <label className="font-medium leading-none" htmlFor="">
            Unit :
          </label>

          <Input
            value={pricing.unit}
            onChange={(e) => {
              setPricing({ ...pricing, unit: e.target.value });
            }}
            placeholder="Name of the medicine"
          ></Input>
        </div>

        <div className="flex-col space-y-1 w-1/4">
          <label className="font-medium leading-none" htmlFor="">
            Price :
          </label>

          <Input
            value={pricing.amount}
            onChange={(e) => {
              setPricing({ ...pricing, amount: e.target.value });
            }}
            placeholder="Name of the medicine"
          ></Input>
        </div>

        <div className="w-1/4 pt-7">
          <Button
            onClick={(e) => {
              setPricings([...pricings, pricing]);
            }}
            className="w-full"
          >
            Add Pricing
          </Button>
        </div>
      </div>

      <Button onClick={handleAddMedicine}>Add Medicine</Button>
    </div>
  );
};

export default AddSlots;
