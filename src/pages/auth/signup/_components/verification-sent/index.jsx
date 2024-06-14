import React, { useEffect, useState } from "react";
import { auth } from "../../../../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { Button, Navbar } from "../../../../../components";
import { Link } from "react-router-dom";
import { spinner } from "../../../../../constants/images";

const VerificationSentScreen = () => {
  const [isResending, setIsResending] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(120); // Initial countdown value in seconds

  useEffect(() => {
    let timer;

    if (!canResend) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Update countdown every second
    }

    return () => {
      clearInterval(timer);
    };
  }, [canResend]);

  useEffect(() => {
    if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendVerification = () => {
    setIsResending(true);
    setCanResend(false);
    setCountdown(120); // Reset countdown to initial value

    const actionCodeSettings = {
      url: "http://localhost:5173",
      handleCodeInApp: true,
    };

    const user = auth.currentUser;

    sendEmailVerification(user, actionCodeSettings)
      .then(() => {
        console.log("Email verification resent");
        // Additional logic, if needed
      })
      .catch((error) => {
        console.error("Email verification resend error:", error);
      })
      .finally(() => {
        setIsResending(false);
      });
  };

  const formatCountdown = (countdown) => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Navbar hideLink scrolling />
      <div className="flex justify-center items-center h-screen px-6 lg:w-1/2 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#181818] mb-4">Verification Email Sent</h2>
          <p className="text-lg mb-6 text-lightgray">
            We have sent a verification link to your email address. Please check
            your inbox and follow the instructions to verify your account.
          </p>
          <p className="text-lg text-lightgray">
            If you didn't receive the email, please check your spam folder or
            click the button below to resend the verification link.
          </p>
          <div className="flex gap-y-4 flex-col lg:w-1/2 mx-auto">
            <button
              className="bg-[#1b2464] hover:bg-primary-700 flex justify-center text-white font-bold py-2 px-4 mt-6 rounded-[6px]"
              onClick={handleResendVerification}
              disabled={!canResend || isResending}
            >
              {isResending ? (
                <img src={spinner} alt="Loading" className="w-6 h-6" />
              ) : canResend ? (
                "Resend Verification Link"
              ) : (
                "Resending..."
              )}
            </button>
            {!canResend && (
              <p className="mt-2 text-gray-600">
                Resend available in: {formatCountdown(countdown)}
              </p>
            )}
            <Link to={"/auth/login"}>
              <Button className="w-full">Proceed to sign in</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationSentScreen;
