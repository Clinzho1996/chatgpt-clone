"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Bot from "../public/bot.png";

function Login() {
  return (
    <div className="bg-[#00082F] h-screen flex flex-col items-center justify-center text-center">
      <Image src={Bot} width={200} height={200} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-[#00082F] p-3 mt-4 rounded-md  bg-white font-bold text-2xl animate-pulse"
      >
        Sign in to use Clinton&apos;s AI
      </button>
    </div>
  );
}

export default Login;
