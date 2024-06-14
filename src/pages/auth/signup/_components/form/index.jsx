import React, { useState, useEffect } from "react";
import { auth } from "../../../../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { spinner } from "../../../../../constants/images";
import { Button } from "../../../../../components";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [goggleLoading, setGoggleLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setGoggleLoading(true);
    setError(null);

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User:", user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        setError("Oops: Something went wrong");
        setGoggleLoading(false);
      });
  };

  const handleAppleSignIn = (e) => {
    e.preventDefault();
    // Apple Sign-In functionality is disabled
  };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user && user.emailVerified) {
  //       // Email is verified
  //       console.log("Email verified!");
  //       // Perform the desired action for a verified email on another device
  //       // For example, redirect the user to a different page
  //       navigate('/');
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="flex w-[400px] gap-y-3 flex-col">
        <span className="text-primary md:text-3xl font-bold">
          Create an account
        </span>
        <form className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="email"
              className="text-primary md:text-lg font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              onChange={handleChange}
              className="py-3 bg-[#dfdfdf] w-full outline-[#131a53] px-4 rounded-[5px]"
              placeholder="Enter email address"
            />
            {error && <div className="text-red-500">{error}</div>}
          </div>

          <Button
            className="w-full flex items-center justify-center"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <img src={spinner} alt="Loading" className="w-6 h-6" />
            ) : (
              "Continue"
            )}
          </Button>
          <div className="flex items-center justify-center gap-2">
            <hr color="dfdfdf" className="w-[100%]" />
            <span className="uppercase text-lightgray">or</span>
            <hr color="dfdfdf" className="w-[100%]" />
          </div>
          <Button
            className="w-full flex items-center justify-center gap-x-1"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            {goggleLoading && (
              <img src={spinner} alt="Loading" className="w-[20px] h-[20px]" />
            )}
            {!goggleLoading && <FcGoogle size={20} />}
            {!goggleLoading && (
              <span className="w-[60%]">Continue with Google</span>
            )}
          </Button>
          <Button
            className="w-full flex items-center justify-center gap-x-1 disabled:opacity-50"
            onClick={handleAppleSignIn}
            disabled={true}
          >
            <FaApple size={20} />
            <span className="w-[60%]">Continue with Apple</span>
          </Button>
          <span className="text-lightgray text-sm">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Loadin and its affiliates to the
            number provided.
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
