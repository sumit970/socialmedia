import React from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
// import {EcGoogle} from 'react-icons/fc';
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import jwt_decode from "jwt-decode";
import { client } from "../client";
const Login = () => {


  let user;
  const createOrGetUser = async (response) => {
    const decode = jwt_decode(response.credential);
    // console.log(decode);
    const { name, picture, sub } = decode;
    // console.log(decode);
    // console.log(name);
    // console.log(picture);
    // console.log(sub);
    user = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    localStorage.setItem("user", JSON.stringify(user));

    
  };
  return (
    <GoogleOAuthProvider
      clientId="466762121241-2qcpgsdvk3f4t7k8i346408lerh438d4.apps.googleusercontent.com"
      className="flex justify-start items-center flex-col h-screen"
    >
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute w-full h-full flex flex-col justify-center items-center top-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" className="" />
          </div>

          <div className=" shadow-2xl">
            <GoogleLogin
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              //  <FcGoogle className="mr-4"/>
              onSuccess={(credentialResponse) => {
                createOrGetUser(credentialResponse);

                console.log(user);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
