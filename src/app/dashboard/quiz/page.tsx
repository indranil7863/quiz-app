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
    const res = await fetch("http://localhost:3001/questions");
    return res.json();
  }
  useEffect(() => {
    async function init() {
      const data = await fetchData();
      quizData.current = data;
      run();
    }
    function run() {
      if (countRef.current >= quizData.current.length) {
        router.replace("/dashboard/result");
        return;
      }

      const q = quizData.current[countRef.current];
      setItem(q);

      countRef.current++;

      const t = q.duration * 1000;

      console.log(item?.duration);

      setTimeout(run, t);
    }
    init();
  }, []);

  console.log("Rendering....");

  return (
    <div className=" w-full min-h-screen flex flex-col gap-4">
      <div className=" w-full bg-secondary-background text-secondary-foreground">
        <section className="lg:w-[80%] w-[90%] mx-auto">
          <div className=" flex sm:justify-between justify-center  gap-4 items-center flex-wrap px-4 py-2">
            <div>
              <p className=" px-2 py-1 rounded-lg bg-gray-600/20">
                question {countRef.current} of {quizData.current.length}
              </p>
            </div>
            <div className="center-div gap-6">
              <div className="center-div gap-2">
                <Clock />
                {item && <TimeCount key={item.id} duration={item?.duration} />}
              </div>
              <div className="center-div flex-col gap-1">
                <span>Score</span>
                <span>0/0</span>
              </div>
            </div>
          </div>
          <div className="py-2">progressbar</div>
        </section>
      </div>
      <section className="lg:w-[80%] mx-auto w-[90%] flex flex-col gap-6 py-8 px-1 bg-card-background text-card-foreground rounded-lg">
        <p className="text-center md:text-3xl text-xl">{item?.question}</p>
        <div className="grid lg:grid-cols-2 w-full grid-cols-1 md:w-full md:grid-cols-1 lg:w-[60%] mx-auto gap-4 items-center py-2 px-2">
          <button className=" py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            {item?.options[0]}
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            {item?.options[1]}
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            {item?.options[2]}
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            {item?.options[3]}
          </button>
        </div>
        <div className="center-div lg:w-[60%] w-full mx-auto">
          {/* conditional rendering */}
          <p className="center-div gap-6 py-4 border w-full rounded-lg border-green-400 text-green-500">
            <PartyPopper />
            <span>Correct! Well done!</span>
          </p>
          {/* <p className="center-div gap-6 hidden border-red-500 text-red-400">
            <span>X Incorrect! correct answer: </span>
            <span>option2</span>
          </p> */}
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default page;
