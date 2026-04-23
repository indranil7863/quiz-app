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

export const page = () => {
  return (
    <div>
      <section>
        <div>
          <button>
            <ArrowLeft />
            <span>Back</span>
          </button>
          <div>
            <BookOpen />
            <span>My Quizzes</span>
          </div>
        </div>
        <div>
          <CirclePlus />
          <span>New Quiz</span>
        </div>
      </section>
      <section>
        <div>
          <h2>Javascript Basics</h2>
          <p>Test your knowledge of JavaScript fundamentals</p>
          <div>
            <span>2 questions</span>
            <span>code: 234</span>
          </div>
          <div>
            <Link href={"/edit"}>
              <SquarePen />
              <span>Edit</span>
            </Link>
            <Link href={"/play"}>
              <PlayIcon />
              <span>Play</span>
            </Link>
            <Link href={"/share"}>
              <Share2 />
              <span>Share</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
