"use client";
import Backbtn from "@/components/Backbtn";
import {
  ArrowLeft,
  CirclePlus,
  PlayIcon,
  Share2,
  SquarePen,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
type Question = {
  id: string;
  question: string;
  options: string[];
  isCorrect: number;
  quizId: string;
};

type Quiz = {
  id: string;
  title: string;
  description: string;
  quizCode: string;
  userId: string;
  questions: Question[];
};

const page = () => {
  const [allQuiz, setAllQuiz] = useState<Quiz[] | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/quiz/", {
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setAllQuiz(data.message);
    })();
  }, []);
  console.log(allQuiz);

  return (
    <div className=" flex flex-col gap-4">
      <div className="bg-secondary-background">
        <section className="sticky top-0 z-4 shadow-2xl flex w-[90%] mx-auto  justify-between items-center px-4 py-2 bg-secondary-background text-secondary-foreground">
          <div className="center-div gap-4 py-2">
            <Link
              href={"/landingpage"}
              className="center-div gap-4 px-4 py-1 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
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
        {allQuiz &&
          allQuiz.map((quiz, i) => (
            <div
              key={i}
              className=" bg-card-background text-card-foreground max-w-[350px] flex flex-col gap-2 px-4 py-4 rounded-lg hover:scale-102 transition duration-150"
            >
              <h2 className="text-xl font-serif tracking-wide font-medium">
                {quiz.title}
              </h2>
              <p className="text-sm">{quiz.description}</p>
              <div className="flex flex-col gap-2 justify-between py-2">
                <span className="bg-gray-500 px-2 py-1 rounded-lg w-[50%]">
                  {quiz.questions.length}questions
                </span>
                <span>code: {quiz.quizCode}</span>
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
                  href={`/dashboard/quiz?id=${quiz.questions[0].quizId}`}
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
          ))}
      </section>
    </div>
  );
};

export default page;
