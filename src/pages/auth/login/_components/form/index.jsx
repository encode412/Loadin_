import React, { useState, useEffect } from "react";
import { auth } from "../../../../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { spinner } from "../../../../../constants/images";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a redirect operation has completed
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
          // User has signed in via redirect
          const user = result.user;
          console.log("User:", user);
          navigate("/go/pickup");
        }
      })
      .catch((error) => {
        console.error("Redirect result error:", error);
      });
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    signInWithEmailAndPassword(auth, email, "demo1231")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User:", user);
        navigate("/go/pickup");
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        const code = error.code.slice(5).replace("-", " ");
        setError(`Oops: ${code}`);
        setIsLoading(false);
      });
  };

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setGoogleLoading(true);
    setError(null);

    const provider = new GoogleAuthProvider();

    if (isMobileDevice()) {
      // For mobile devices, use redirect-based sign-in flow
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return signInWithRedirect(auth, provider);
        })
        .catch((error) => {ctioncode
          console.error("Redirect sign-in error:", error);
          setError("Oops: Something went wrong");
          setGoogleLoading(false);
        });
    } else {
      // For non-mobile devices, use popup-based sign-in flow
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("User:", user);
          navigate("/go/pickup");
        })
        .catch((error) => {
          console.error("Popup sign-in error:", error);
          setError("Oops: Something went wrong");
          setGoogleLoading(false);
        });
    }
  };

  const handleAppleSignIn = (e) => {
    e.preventDefault();
    // Apple Sign-In functionality is disabled
  };



  return (
    <div className="flex justify-center items-center h-screen overflow-hidden px-8">
      <div className="flex w-[400px] gap-y-3 flex-col">
        <span className="text-primary text-xl md:text-3xl font-bold">
          Order a vehicle
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
              name="email"
              id="email"
              required
              className="py-3 bg-[#dfdfdf] w-full outline-[#131a53] px-4 rounded-[5px]"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
            />
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-primary w-full hover:bg-primary-dark text-white"
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
            {googleLoading && (
              <img src={spinner} alt="Loading" className="w-[20px] h-[20px]" />
            )}
            {!googleLoading && <FcGoogle size={20} />}
            {!googleLoading && (
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

export default LoginForm;
