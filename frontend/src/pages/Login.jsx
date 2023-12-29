import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginImage from "@/assets/images/login.svg";
import SignUpImage from "@/assets/images/signup.svg";
import BgBlue from "@/assets/images/bg_image_blue.jpg";

const Login = () => {
  return (
    <div className="h-[600px] flex shadow-2xl rounded-2xl mx-[150px] my-[50px] bg-[url('@/assets/images/bg_image_blue.jpg')]">
      <div className="w-1/2 shadow-2xl rounded-2xl flex items-center justify-center">
        <img src={LoginImage} alt="" className="w-3/4"/>
      </div>
      <div className="w-1/2 flex justify-center items-center ">
        <Tabs
          defaultValue="Login"
          className="w-[400px] flex flex-col items-center justify-center"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="SignUp">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="Login" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login with your email and password
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="yahoo@gmail.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="****" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="SignUp" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>
                  Create an account with your email and password
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="mail" type="email" placeholder="yahoo@gmail.com"/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Password</Label>
                  <Input id="pass" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Confirm Password</Label>
                  <Input id="cpass" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>SignUp</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
