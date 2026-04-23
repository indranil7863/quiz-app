import Image from "next/image";
import {
  BookOpen,
  CirclePlus,
  PlayIcon,
  Share2,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Play } from "next/font/google";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <div className="center-div lg:flex-row flex-col  gap-x-4 ">
      <section className="flex-1 px-4 ">
        <div className="w-[80%] mx-auto flex flex-col justify-center gap-6 pb-8">
          <div className="flex flex-row justify-start gap-x-4 py-4 px-2 ">
            <p className=" h-12 w-12 center-div rounded-full bg-white">
              <BookOpen color="black" />
            </p>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-3xl font-semibold">Quizlet</h2>
              <p className="text-gray-400">Interactive Quiz Platform</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 px-6 py-8 rounded-4xl shadow-2xl bg-gray-500/20 ">
            <h1 className="text-2xl">Welcome to Quizlet!</h1>
            <p className="tracking-wide">
              Create engaging, interactive quizzes and host live quiz sessions
              that bring learning to life. Perfect for teachers, trainers, and
              anyone who wants to make learning fun and interactive.
            </p>
            <div className="flex items-center gap-2 py-2">
              <span>
                <Users />
              </span>
              <p>Join thousands of educators worldwide</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 px-4  py-4 ">
            <h1 className="text-2xl">How It Works</h1>
            <div className="flex flex-row  gap-4">
              <span className="w-10 h-10 center-div px-2 rounded-full bg-gray-600">
                <CirclePlus />
              </span>
              <div>
                <p className="font-mono">Create Quizes</p>
                <p className="text-gray-500">
                  Build interactive quizzes with multiple choice questions,
                  timers, and custom scoring
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <span className="w-10 h-10 center-div px-2 rounded-full bg-sky-500">
                <Share2 />
              </span>
              <div>
                <p className="font-mono">Share & Host</p>
                <p className="text-gray-500">
                  Generate quiz codes for students to join and participate in
                  real-time
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <span className="w-10 h-10 center-div px-2 rounded-full bg-purple-500">
                <PlayIcon />
              </span>
              <div>
                <p className="font-mono">Play Together</p>
                <p className="text-gray-500">
                  Experience live quiz sessions with instant feedback and
                  scoring
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4">
              <span className="w-10 h-10 center-div px-2 rounded-full bg-amber-800">
                <Trophy />
              </span>
              <div>
                <p className="font-mono">Track Results</p>
                <p className="text-gray-500">
                  View detailed results and analytics to understand performance
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-center gap-y-6 py-8 bg-gray-500/20 rounded-4xl shadow-2xl">
            <div className="flex flex-col items-center gap-2">
              <span>
                <Zap color="gold" />
              </span>
              <p className="font-mono">Real-time Play</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>
                <Users color="blue" />
              </span>
              <p className="font-mono">Multiplayer</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>
                <Trophy color="purple" />
              </span>
              <p className="font-mono">Scoring system</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>
                <BookOpen color="green" />
              </span>
              <p className="font-mono">Easy Creation</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex-1">
        <SignIn />
      </section>
    </div>
  );
}
