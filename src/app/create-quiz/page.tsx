"use client";
import Backbtn from "@/components/Backbtn";
import Edit from "@/components/Edit";
import SideBar from "@/components/SideBar";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  duration: number;
};

const page = () => {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState<string>("");

  // here our data is ready for new quiz we have to spread in one place then send to backend
  // if it is an existing quiz , then fetched data is allocated to states .

  async function saveQuizHandler() {
    // validation
    if (title.trim().length < 1) {
      setErr("write a valid title!");
      return;
    } else if (description.trim().length < 1) {
      setErr("write a valid description");
      return;
    } else {
      if (quiz.length < 1) {
        setErr("quiz must have atleast one question");
        return;
      }
      quiz.forEach((q, i) => {
        if (q.question.trim().length < 1) {
          setErr(`write question no: ${i + 1}`);
          return;
        } else {
          q.options.forEach((op, j) => {
            if (op.trim().length < 1) {
              setErr(`write the option ${j + 1} in question no: ${i + 1}`);
              return;
            }
          });
        }
      });
    }

    const quizCode = crypto.randomUUID();
    const quizData = {
      title: title,
      description,
      quizCode,
      questions: quiz,
    };
    console.log(quizData);
    try {
      const res = await fetch("http://localhost:4000/quiz", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          
        },
        body: JSON.stringify(quizData),
      });

      if (!res.ok) {
        throw new Error("Failed to create the quiz!");
      }
      router.replace("/dashboard");
    } catch (error) {
      console.log("error: ", error);
    }
  }

  if (err.length > 1) {
    alert(err);
    setErr("");
  }

  return (
    <div>
      <section className=" w-full sticky top-0  py-2 bg-secondary-background text-secondary-foreground z-4">
        <div className=" w-[90%] mx-auto flex flex-wrap gap-6  justify-end sm:justify-between items-center px-2 py-2">
          <div className="sm:center-div flex justify-between mx-auto sm:ml-0 gap-4">
            <Backbtn />
            <p className="text-xl sm:text-2xl">Create New Quiz</p>
          </div>
          <div>
            <button
              onClick={saveQuizHandler}
              className="center-div gap-4 px-4 py-1 rounded-lg bg-gray-500/30 hover:bg-gray-700/30"
            >
              <Save size={18} />
              <span>Save Quiz</span>
            </button>
          </div>
        </div>
      </section>
      <div className=" flex lg:flex-row flex-col gap-2 py-2 lg:justify-center  w-[90%] mx-auto">
        <section className=" flex flex-col  gap-8 flex-1  max-w-[400px] py-4 px-2">
          <div className=" max-w-87.5 flex flex-col bg-card-background text-card-foreground gap-2 rounded-lg py-4 px-4">
            <h3 className="font-medium">Quiz Information</h3>
            <label htmlFor="Title">
              <p className="pb-1">Quiz Title</p>
              <input
                className="w-full px-2 py-1 outline-gray-500 bg-gray-400/20 rounded-lg"
                type="text"
                id="Title"
                placeholder="Enter quiz title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="description">
              <p className="pb-1">Description</p>
              <input
                className="w-full px-2 py-1 outline-gray-500 bg-gray-400/20 rounded-lg"
                type="text"
                id="description"
                placeholder="Enter quiz description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <div className="flex justify-between">
              <span>Questions: 2</span>
              <span>2 total</span>
            </div>
          </div>
          <SideBar
            quiz={quiz}
            setQuiz={setQuiz}
            setEditingQuestion={setEditingQuestion}
          />
        </section>

        <Edit
          editingQuestion={editingQuestion}
          setEditingQuestion={setEditingQuestion}
          setQuiz={setQuiz}
        />
      </div>
    </div>
  );
};

export default page;
