import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="flex-col space-y-5">
      <h1 className="text-2xl font-bold">Slot Availability</h1>
      <div className="flex-col space-y-2">
        <h1 className="font-bold text-lg">Select Date : </h1>
        <div className="DatePicker">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal border border-black",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex-col space-y-2">
        <h1 className="font-bold text-lg">Location : </h1>
        <p>Bangladesh University of Engineering and Technology, Dhaka-1000</p>
      </div>
      <div className="flex-col space-y-2">
        <h1 className="font-bold text-lg">Select Slot : </h1>
        <div className="SlotSelector">
          <Select>
            <SelectTrigger className="w-[280px] border border-black">
              <SelectValue placeholder="Select a slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Slots</SelectLabel>
                <SelectItem value="apple" style={{ whiteSpace: "pre" }}>
                  7:30 PM - 8:30 PM | 3 remaining
                </SelectItem>
                <SelectItem value="banana" style={{ whiteSpace: "pre" }}>
                  7:30 PM - 8:30 PM | 3 remaining
                </SelectItem>
                <SelectItem value="blueberry">
                  7:30 PM - 8:30 PM | 3 remaining
                </SelectItem>
                <SelectItem value="grapes">
                  7:30 PM - 8:30 PM | 3 remaining
                </SelectItem>
                <SelectItem value="pineapple">
                  7:30 PM - 8:30 PM | 3 remaining
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-[280px]">Take Appointment</Button>
    </div>
  );
};

export default Appointment;
