import Backbtn from "@/components/Backbtn";
import {
  ArrowLeft,
  BookOpen,
  CirclePlus,
  PlayIcon,
  Share2,
  SquarePen,
} from "lucide-react";
import { Play } from "next/font/google";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="bg-secondary-background">
        <section className="sticky top-0 z-4 shadow-2xl flex w-[90%] mx-auto  justify-between items-center px-4 py-2 bg-secondary-background text-secondary-foreground">
          <div className="center-div gap-4 py-2">
            <Backbtn />
            <div className=" text-2xl px-2 py-2 font-medium">
              <span>My Quizzes</span>
            </div>
          </div>
          <Link
            href={"/create-quiz"}
            className="center-div gap-2 px-4 py-2 rounded-lg  bg-button-background text-button-foreground  hover:bg-button-background/50"
          >
            <CirclePlus size={18} />
            <span>New Quiz</span>
          </Link>
        </section>
      </div>
      <section className="w-[90%] mx-auto py-4 px-2 flex gap-4 items-center justify-center flex-wrap">
        <div className=" bg-card-background text-card-foreground max-w-[350px] flex flex-col gap-2 px-4 py-4 rounded-lg hover:scale-102 transition duration-150">
          <h2 className="text-xl font-serif tracking-wide font-medium">
            Javascript Basics
          </h2>
          <p className="text-sm">
            Test your knowledge of JavaScript fundamentals
          </p>
          <div className="flex justify-between py-2">
            <span className="bg-gray-500 px-2 py-1 rounded-lg">
              2 questions
            </span>
            <span>code: 234</span>
          </div>
          <div className="flex justify-between items-center pt-4 gap-2">
            <Link
              className="border center-div gap-4 px-4 text-sm font-bold py-2 rounded-lg hover:text-gray-500"
              href={"/create-quiz"}
            >
              <SquarePen size={18} />
              <span>Edit</span>
            </Link>
            <Link
              className="border center-div gap-4 px-4 text-sm font-bold py-2 rounded-lg text-sky-400 hover:text-gray-500"
              href={"/dashboard/quiz"}
            >
              <PlayIcon size={18} />
              <span>Play</span>
            </Link>
            <Link
              className="border center-div gap-4 px-4 text-sm font-bold py-2 rounded-lg text-green-400 hover:text-gray-600"
              href={"/share"}
            >
              <Share2 size={18} />
              <span>Share</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
