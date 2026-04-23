import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SignIn = () => {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-4xl px-2 pb-4">
      <section className="flex flex-col just-center gap-4 bg-white text-black max-w-110 rounded-2xl pb-4">
        <div>
          <p className="text-center text-2xl py-2">Sign In</p>
          <p className="text-center py-1 text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="px-4">
          <p className="flex flex-row items-center gap-2 py-1">
            <Mail size={18} />
            <span>Email</span>
          </p>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="px-4">
          <p className="flex flex-row items-center gap-2 py-1">
            <Lock size={18} />
            <span>Password</span>
          </p>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="flex flex-row justify-center gap-2 w-[90%] mx-auto py-1  rounded-xl text-white bg-green-600 transition duration-300 hover:scale-105 hover:bg-green-500">
          <User size={20} className="pt-1" />
          <span>Sign In</span>
        </button>
        <div className=" text-center">
          <Link
            href={"/"}
            className="text-green-600 hover:border-b hover:border-b-green-400"
          >
            Forget your password?
          </Link>
        </div>
        <div className="text-center relative center-div py-3">
          <p className="w-full border-t border-t-gray-500"></p>
          <span className="bg-white text-gray-500  px-2 absolute top-0">
            Don't have an account?
          </span>
        </div>
        <Link
          className="text-center border text-green-500 border-green-400 border-2 w-[90%] py-1 rounded-xl transition duration-300 hover:scale-105 hover:text-black mx-auto"
          href="/register"
        >
          Create New Account
        </Link>
      </section>
      <section className=" max-w-110 items-center  py-2 flex flex-col rounded-xl text-sm bg-gray-700/20 shadow-2xl justify-center">
        <p>Demo Credentials:</p>
        <span>Email: demo@quizlet.com</span>
        <span>Password: demo123</span>
      </section>
    </div>
  );
};
