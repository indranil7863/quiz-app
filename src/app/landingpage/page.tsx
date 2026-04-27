"use client";
import {
  BadgePlus,
  BookOpen,
  GoalIcon,
  LogOut,
  TabletSmartphone,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

const page = () => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  async function HandleJoinQuiz() {
    // first verify the code
    try {
      // const res = await fetch(`http://localhost:3000/${code}`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // });

      // if (!res.ok) {
      //   throw new Error("Invalid code!");
      // }

      // if code verification successful then redirect to /dashboard/quiz/id
      router.push(`/dashboard/quiz?code=${code}`);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown error");
      }
      setCode("");
    }
  }

  return (
    <div className=" min-h-screen w-full flex flex-col gap-4 ">
      <div className="flex justify-between items-center py-2 px-4 shadow-2xl sticky top-0 z-10 bg-secondary-background">
        <div className="center-div gap-2">
          <span className="w-12 h-12 center-div bg-white  text-green-400 rounded-full">
            <BookOpen />
          </span>
          <span className="text-3xl">Quizlet</span>
        </div>
        <div className="center-div gap-8">
          <Link
            href={"/dashboard"}
            className=" px-4 py-1 hover:bg-green-300 hover:text-black transition duration-150 rounded-lg"
          >
            Dashboard
          </Link>
          <Link
            className="center-div gap-4 hover:bg-gray-400 transition duration-150 text-white px-4 py-1 rounded-lg"
            href={"/"}
          >
            <LogOut />
            <span>Logout</span>
          </Link>
        </div>
      </div>
      <section className=" flex flex-col  w-[80%] mx-auto gap-6 py-4">
        <div className="max-w-[50%] mx-auto">
          <h2 className="text-center text-5xl font-semibold tracking-wide">
            Make Learning Fun!
          </h2>
          <p className="text-center text-xl font-light tracking-wide py-4">
            Create engaging quizzes and challenge your friends. Join thousands
            of educators making learning interactive and enjoyable.
          </p>
        </div>
        <div className="w-[50%] mx-auto center-div gap-4 flex-wrap">
          <div className=" rounded-lg bg-card-background text-card-foreground flex-1 flex flex-col items-center py-6 px-4 gap-4 hover:scale-105 transition duration-150">
            <span className="w-12 h-12 center-div bg-white  text-green-400 rounded-full">
              <BadgePlus />
            </span>
            <p className="text-2xl tracking-wide">Create a Quiz</p>
            <p className="text-center tracking-wider text-gray-500">
              Build your own interactive quiz with multiple choice questions
            </p>
            <Link
              className="w-full text-center bg-button-background text-button-foreground py-1 rounded-lg hover:scale-105 transition duration-150"
              href={"/create-quiz"}
            >
              Get Started
            </Link>
          </div>
          <div className=" rounded-lg bg-card-background text-card-foreground flex-1 flex flex-col items-center py-6 px-4 gap-4 hover:scale-105 transition duration-150">
            <span className="w-12 h-12 center-div bg-white  text-green-400 rounded-full">
              <Users />
            </span>
            <p className="text-2xl tracking-wide">Join a Quiz</p>
            <p className="text-center tracking-wider text-gray-500">
              Enter a quiz code to join an existing quiz session
            </p>
            <input
              className="w-full  outline-none bg-gray-600/20 px-2 py-1 rounded-lg text-center"
              type="text"
              placeholder="Enter quiz code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {error && <span>{error}</span>}
            <button
              className="w-full text-center py-1 bg-button-background text-button-foreground rounded-lg hover:scale-105 transition duration-150"
              onClick={HandleJoinQuiz}
            >
              Join Quiz
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row lg:items-center flex-col gap-2 justify-around w-[50%] mx-auto px-1 py-4">
          <div className="flex-1 flex flex-col items-center gap-2 ">
            <span className="w-12 h-12 center-div text-green-400 rounded-full bg-orange-500 text-white">
              <Zap />
            </span>
            <span className="text-center">Quick Setup</span>
            <span className="text-center text-sm">
              Create quizzes in minutes
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 items-center ">
            <span className="w-12 h-12 center-div  bg-green-500  text-white rounded-full">
              <TabletSmartphone />
            </span>
            <span className="text-center">Mobile Friendly</span>
            <span className="text-center text-sm">Works on any device</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 items-center ">
            <span className="w-12 h-12 center-div bg-pink-600  text-white rounded-full">
              <GoalIcon />
            </span>
            <span className="text-center">Real-time Results</span>
            <span className="text-center text-sm">
              Instant feedback and scoring
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
