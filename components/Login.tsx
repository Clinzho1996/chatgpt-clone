"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Bot from "../public/bot.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const handleSignIn = async () => {
    const result = await signIn("google");
    if (result?.error) {
      toast.error("Sign-in failed. Please try again.");
    } else {
      toast.success("Sign-in successful!");
    }
  };

  return (
    <div className="bg-[#00082F] h-screen flex flex-col items-center justify-center text-center">
      <Image src={Bot} width={200} height={200} alt="logo" />
      <button
        onClick={handleSignIn}
        className="text-[#00082F] p-3 mt-4 rounded-md bg-white font-bold text-2xl animate-pulse"
      >
        Sign in to use Clinton&apos;s AI
      </button>
      <ToastContainer />
    </div>
  );
}

export default Login;
