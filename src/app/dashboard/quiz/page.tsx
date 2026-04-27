"use client";
import TimeCount from "@/components/TimeCount";
import { Clock, PartyPopper, QuoteIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";

// type Options= {
//   option1: string;
//   option2: string;
//   option3: string;
//   options4: string;
// }

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  duration: number;
};

function page() {
  const quizData = useRef([
    {
      id: 1,
      question: "what is the color of sun?",
      options: ["red", "blue", "black", "yellow"],
      correctIndex: 1,
      duration: 20,
    },
    {
      id: 2,
      question: "what is the color of sky?",
      options: ["red", "blue", "black", "yellow"],
      correctIndex: 2,
      duration: 10,
    },
    {
      id: 3,
      question: "what is the color of sky?",
      options: ["red", "blue", "black", "yellow"],
      correctIndex: 2,
      duration: 5,
    },
  ]);
  const countRef = useRef(0);
  const [item, setItem] = useState<Question | null>(null);
  console.log("item", item);
  const router = useRouter();

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:3002/questions");
      if (!res.ok) {
        throw new Error("Failed to fetch!");
      }
      return await res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const progressRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  function run() {
    if (countRef.current >= quizData.current.length) {
      router.replace(`/dashboard/result?score=${correctRef.current}&total=${quizData.current.length}`);
      return;
    }

    const q = quizData.current[countRef.current];
    setItem(q);

    countRef.current++;
    progressRef.current++;

    return q;
  }
  function startTimer(q: Question) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const nextQ = run();
      if (nextQ) startTimer(nextQ);
    }, q.duration * 1000);
  }

  useEffect(() => {
    async function init() {
      const data = await fetchData();
      quizData.current = data;
      const q = run();
      if (q) startTimer(q);
    }

    init();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [iscorrect, setIsCorrect] = useState(-1);
  const correctRef = useRef<number>(0);
  function handleClick(index: number) {
    if (selected !== null) return; // prevent multiple clicks
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelected(index);
    setIsRunning(false); // ⛔ stop timer

    setShowResult(true);

    const isCorrect = index === item?.correctIndex;
    setIsCorrect(+isCorrect);

    if (isCorrect) {
      correctRef.current++;
    }

    // move to next question after delay
    setTimeout(() => {
      setSelected(null);
      setShowResult(false);
      setIsRunning(true);
      setIsCorrect(-1);
      const nextQ = run();
      if (nextQ) startTimer(nextQ);
    }, 1500);
  }

  console.log("Rendering....");

  return (
    <div className=" w-full min-h-screen flex flex-col gap-4">
      <div className=" w-full bg-secondary-background text-secondary-foreground">
        <section className="lg:w-[80%] w-[90%] mx-auto flex flex-col gap-2 py-2 ">
          <div className=" flex sm:justify-between justify-center  gap-4 items-center flex-wrap px-4 py-2">
            <div>
              <p className=" px-2 py-1 rounded-lg bg-gray-600/20">
                question {countRef.current} of {quizData.current.length}
              </p>
            </div>
            <div className="center-div gap-6">
              <div className="center-div gap-2">
                <Clock />
                {item && (
                  <TimeCount
                    key={item.id}
                    isRunning={isRunning}
                    duration={item?.duration}
                  />
                )}
              </div>
              {/* <div className="center-div flex-col gap-1">
                <span>Score</span>
                <span>0/0</span>
              </div> */}
            </div>
          </div>
          <div className={`w-full bg-gray-300 rounded overflow-hidden`}>
            <div
              className={`relative h-2 bg-green-500 overflow-hidden`}
              style={{
                width: `${(progressRef.current / quizData.current.length) * 100}%`,
              }}
            >
              <div className="shine"></div>
            </div>
          </div>
        </section>
      </div>
      <section className="lg:w-[80%] mx-auto w-[90%] flex flex-col gap-6 py-8 px-1 bg-card-background text-card-foreground rounded-lg">
        <p className="text-center md:text-3xl text-xl">{item?.question}</p>
        <div className="grid lg:grid-cols-2 w-full grid-cols-1 md:w-full md:grid-cols-1 lg:w-[60%] mx-auto gap-4 items-center py-2 px-2">
          {item?.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`py-4 rounded-lg ${
                showResult
                  ? i === item.correctIndex
                    ? "bg-green-500"
                    : i === selected
                      ? "bg-red-500"
                      : "bg-gray-300"
                  : "bg-button-background"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="center-div lg:w-[60%] w-full mx-auto">
          {iscorrect === -1 ? (
            <span></span>
          ) : iscorrect === 1 ? (
            <p className="center-div gap-6 py-4 border w-full rounded-lg border-green-400 text-green-500">
              <PartyPopper />
              <span>Correct! Well done!</span>
            </p>
          ) : (
            <p className="center-div gap-6 hidden border-red-500 text-red-400">
              <span>X Incorrect! correct answer: </span>
              <span>{item && item?.correctIndex + 1}</span>
            </p>
          )}
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default page;
