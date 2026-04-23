import {
  ArrowLeft,
  BookOpen,
  ChartNoAxesCombined,
  Gamepad2,
  Lock,
  Mail,
  NotebookPen,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const Register = () => {
  return (
    <div className="flex flex-col just-center gap-8 max-w-[90%] mx-auto py-4 px-2">
      <section className="flex flex-col justify-center gap-2 items-center">
        <div className="flex gap-4 items-center">
          <span className="w-12 h-12 center-div bg-white  text-green-400 rounded-full">
            <BookOpen />
          </span>
          <span className="text-3xl">Quizlet</span>
        </div>
        <p className="tracking-wide text-center">
          Create your account to get started
        </p>
      </section>
      <section className=" max-w-[400px] mx-auto flex flex-col justify-center bg-gray-500/20 gap-4 px-4 py-4 rounded-xl">
        <div className="flex just-center items-center">
          <ArrowLeft size={18} />
          <p className="flex-1 text-center text-2xl">Create Account</p>
        </div>
        <p className="pb-2 text-center tracking-wide">
          Join Quizlet and start creating amazing quizzes
        </p>
        <div>
          <label
            htmlFor="name"
            className="flex flex-row items-center gap-2 py-2"
          >
            <User />
            <span>Full Name</span>
          </label>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="flex flex-row items-center gap-2 py-2"
          >
            <Mail />
            <span>Email</span>
          </label>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="text"
            id="email"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="flex flex-row items-center gap-2 py-2"
          >
            <Lock />
            <span>Password</span>
          </label>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="password"
            id="password"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="flex flex-row items-center gap-2 py-2"
          >
            <Lock />
            <span>Confirm Password</span>
          </label>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="password"
            id="password"
            placeholder="Confirm your password"
          />
        </div>
        <button className="flex flex-row justify-center gap-2 w-full mx-auto py-1  rounded-xl text-white bg-green-600 transition duration-300 hover:scale-105 hover:bg-green-500">
          <UserPlus size={18} />
          <span>Create Account</span>
        </button>
        <div className="py-4">
          <p className="text-center text-sm">
            By signing up, you agree to our{" "}
            <span className="text-lg text-green-400 hover:border-b hover:border-b-green-500/ cursor-pointer ">
              Terms of Service{" "}
            </span>
            and{" "}
            <span className="text-lg text-green-400 hover:border-b hover:border-b-green-500/30 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
        <div className="text-center relative center-div py-3">
          <p className="w-full border-t border-t-gray-500"></p>
          <span className="bg-gray-500 z-2 text-gray-200 rounded-3xl  px-2 absolute top-0">
            Already have an account?
          </span>
        </div>
        <Link
          className="text-center border text-sky-500 border-sky-400 border-2 w-full py-1 rounded-xl transition duration-300 hover:scale-105 hover:text-white mx-auto"
          href={"/"}
        >
          Sign In Instead
        </Link>
      </section>
      <section className="flex flex-row justify-evenly gap-2 flex-wrap ">
        <div className=" flex flex-col items-center py-4  gap-2 shadow-2xl bg-gray-500/20 px-4 rounded-xl">
          <span className="w-10 h-10 center-div bg-gray-400 text-white rounded-full">
            <NotebookPen />
          </span>
          <span>Create Quizzes</span>
        </div>
        <div className=" flex flex-col items-center shadow-2xl bg-gray-500/20 gap-2 py-4  px-4 rounded-xl">
          <span className="w-10 h-10 center-div bg-sky-400 text-white rounded-full">
            <Gamepad2 />
          </span>
          <span>Interactive Play</span>
        </div>
        <div className=" flex flex-col items-center shadow-2xl bg-gray-500/20 py-4  gap-2 px-4 rounded-xl">
          <span className="w-10 h-10 center-div bg-amber-500 text-white rounded-full">
            <ChartNoAxesCombined />
          </span>
          <span>Real-time Results</span>
        </div>
      </section>
    </div>
  );
};
