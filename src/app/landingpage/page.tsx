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
import React from "react";

export const page = () => {
  return (
    <div>
      <section className="text-red-500">
        <div>
          <div>
            <span>
              <BookOpen />
            </span>
            <span>Quizlet</span>
          </div>
          <div>
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/logout"}>
              <LogOut />
              <span>Logout</span>
            </Link>
          </div>
        </div>
        <div>
          <h2>Make Learning Fun!</h2>
          <p>
            Create engaging quizzes and challenge your friends. Join thousands
            of educators making learning interactive and enjoyable.
          </p>
        </div>
        <div>
          <div>
            <span>
              <BadgePlus />
            </span>
            <p>Create a Quiz</p>
            <p>
              Build your own interactive quiz with multiple choice questions
            </p>
            <Link href={"/create-quiz"}>Get Started</Link>
          </div>
          <div>
            <span>
              <Users />
            </span>
            <p>Join a Quiz</p>
            <p>Enter a quiz code to join an existing quiz session</p>
            <input type="text" placeholder="Enter quiz code" />
            <Link href={"/create-quiz"}>Join Quiz</Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <Zap />
            </span>
            <span>Quick Setup</span>
            <span>Create quizzes in minutes</span>
          </div>
          <div>
            <span>
              <TabletSmartphone />
            </span>
            <span>Mobile Friendly</span>
            <span>Works on any device</span>
          </div>
          <div>
            <span>
              <GoalIcon />
            </span>
            <span>Real-time Results</span>
            <span>Instant feedback and scoring</span>
          </div>
        </div>
      </section>
    </div>
  );
};
