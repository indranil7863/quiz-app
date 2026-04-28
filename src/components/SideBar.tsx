import { CirclePlus, Trash } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  duration: number;
};

const SideBar = React.memo(function SideBar({
  quiz,
  setQuiz,
  setEditingQuestion,
}: {
  quiz: Question[];
  setQuiz: Dispatch<SetStateAction<Question[]>>;
  setEditingQuestion: Dispatch<SetStateAction<Question | null>>;
}) {
  function addQuiz() {
    const newQuizid = crypto.randomUUID();
    const newquestion: Question = {
      id: newQuizid,
      question: "",
      correctIndex: 0,
      options: ["", "", "", ""],
      duration: 30,
    };
    setQuiz((prev) => [...prev, newquestion]);
  }

  function handleEdit(id: string) {
    const question = quiz.find((q: Question) => q.id === id);
    if (question) {
      setEditingQuestion({ ...question });
    }
  }

  function handleDelete(id: string) {
    if (!id) return;
    setQuiz((quiz) => quiz.filter((q) => q.id !== id));
  }

  return (
    <>
      <div className=" max-w-87.5 flex flex-col  bg-card-background text-card-foreground gap-4 rounded-lg py-4 px-4">
        <div className="flex justify-between items-center">
          <span>Questions</span>
          <button
            onClick={addQuiz}
            className="center-div gap-2 bg-button-background text-button-foreground hover:bg-button-background/50 px-2 py-1 rounded-lg"
          >
            <CirclePlus size={18} />
            <span>Add Question</span>
          </button>
        </div>
        {quiz &&
          quiz.map((q, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 items-center">
                <div className="flex justify-between items-center  border w-full px-2 rounded-lg">
                  <button
                    className="flex-1 py-2"
                    onClick={() => handleEdit(q.id)}
                  >
                    <p>question {index + 1}</p>
                    <input
                      className="w-full rounded-lg px-2 outline-none"
                      type="text"
                      value={q ? q.question : "Untitled question"}
                      readOnly
                    />
                  </button>
                  <button className="px-2" onClick={() => handleDelete(q.id)}>
                    <Trash size={18} color="red" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
});

export default SideBar;
