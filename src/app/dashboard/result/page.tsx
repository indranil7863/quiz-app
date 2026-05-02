"use client";
import { Clock, House, RotateCcw, Trophy } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultContent() {
  const params = useSearchParams();
  const quizId = params.get("id") as string;
  const title = params.get("title") as string;
  let score = params.get("score") ? parseInt(params.get("score")!) : 0;
  const totalQuestions = params.get("total")
    ? parseInt(params.get("total")!)
    : 0;
  let percentage = 0;
  if (score && totalQuestions) {
    percentage = Math.floor((score / totalQuestions) * 100);
  }

  // const title = params.get("title");
  // console.log({ score, totalQuestions });
  return (
    <div className=" w-full min-h-screen py-6 ">
      <div className="max-w-150 mx-auto flex flex-col rounded-lg gap-8 px-4 py-4 bg-card-background text-card-foreground">
        <section className="flex flex-col gap-4 px-4 py-4 rounded-lg">
          <div className="center-div w-full">
            <span className="w-20 h-20 center-div rounded-full bg-amber-600/20">
              <Trophy size={35} color="gold" />
            </span>
          </div>
          <p className="text-center text-3xl">Quiz Completed!</p>
          <div>
            <span className=" px-4 py-2 bg-gray-400/50 font-medium text-xl rounded-lg">
              quiz title
            </span>
          </div>
          <div className="center-div flex-col gap-4 py-3">
            <span className="text-5xl">🎯</span>
            <p className="text-2xl">
              {score}/{totalQuestions}
            </p>
            <p className="text-2xl">{percentage}%</p>
            <p className="text-xl">Keep practicing! 📚</p>
          </div>
          <div className="flex justify-around gap-2 items-center  py-2 px-1">
            <div className="bg-gray-600/20 center-div flex-col flex-1 rounded-lg">
              <span className="text-5xl text-green-600">𖣠</span>
              <span className="text-2xl text-green-500">{score}</span>
              <span className=" text-green-500">Correct</span>
            </div>
            <div className=" bg-gray-600/20 center-div py-2 flex-col flex-1 rounded-lg">
              <Clock size={25} color="red" />
              <span className="text-2xl text-red-600 py-1">
                {totalQuestions - score}
              </span>
              <span className="text-red-500">Incorrect</span>
            </div>
          </div>
        </section>
        <section className="flex justify-around items-center py-4 px-2 gap-4">
          <Link
            href={`/dashboard/quiz?id=${quizId}`}
            className=" flex-1 center-div flex-col py-2 rounded-lg bg-sky-400/50 hover:bg-sky-600 text-white"
          >
            <RotateCcw size={18} />
            <span>Play Again</span>
          </Link>
          <Link
            href={"/dashboard"}
            className=" flex-1 center-div flex-col py-2 rounded-lg bg-button-background hover:bg-button-background/50 text-button-foreground"
          >
            <House size={18} />
            <span>Exit</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <Suspense fallback={<p>loading....</p>}>
      <ResultContent />
    </Suspense>
  );
}
