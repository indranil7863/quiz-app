import { CirclePlusIcon, Clock } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  duration: number;
};

const Edit = React.memo(function Edit({
  editingQuestion,
  setEditingQuestion,
  setQuiz,
}: {
  editingQuestion: Question | null;
  setEditingQuestion: Dispatch<SetStateAction<Question | null>>;
  setQuiz: Dispatch<SetStateAction<Question[]>>;
}) {
  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingQuestion) return;

    setQuiz((prev) =>
      prev.map((q) => (q.id === editingQuestion.id ? editingQuestion : q)),
    );

    setEditingQuestion(null);
  }

  return (
    <>
      <section className=" flex-1 px-2 py-2 relative">
        <div className="flex justify-center     w-full min-h-screen">
          <div className="flex flex-col items-center gap-2">
            <CirclePlusIcon size={50} />
            <p className="text-xl text-gray-500">Select a question to edit</p>
            <p className="text-gray-500">
              Choose a question from the list or add a new one to get started.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSave}
          className="flex flex-col w-[98%] absolute top-2 shadow-2xl  z-2 gap-4 px-4 py-4 bg-card-background text-card-foreground rounded-lg"
        >
          <h3 className="font-medium text-xl">Edit Question</h3>
          <label className="flex flex-col gap-2" htmlFor="question-text">
            <span>Question Text</span>
            <input
              className="px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
              type="text"
              id="question-text"
              placeholder="Enter your question"
              value={editingQuestion?.question || ""}
              onChange={(e) =>
                setEditingQuestion((prev) =>
                  prev ? { ...prev, question: e.target.value } : prev,
                )
              }
            />
          </label>

          <div className="flex flex-col gap-2 ">
            <p>Answer Options</p>
            {editingQuestion?.options.map((value, index) => (
              <div key={index} className="flex lg:flex-row gap-2 items-center">
                <input
                  type="radio"
                  id={`Option${index + 1}`}
                  name="question"
                  checked={editingQuestion.correctIndex === index}
                  onChange={() =>
                    setEditingQuestion((prev) =>
                      prev ? { ...prev, correctIndex: index } : prev,
                    )
                  }
                />

                <label className="pr-2" htmlFor={`Option${index + 1}`}>
                  Correct
                </label>

                <input
                  className="w-full px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={value}
                  onChange={(e) =>
                    setEditingQuestion((prev) =>
                      prev
                        ? {
                            ...prev,
                            options: prev.options.map((opt, i) =>
                              i === index ? e.target.value : opt,
                            ),
                          }
                        : prev,
                    )
                  }
                />
              </div>
            ))}
          </div>

          <div className="flex  flex-wrap gap-6 justify-between w-[90%] mx-auto py-4">
            <div className="center-div gap-2">
              <Clock size={18} />
              <p>Time Limit (seconds)</p>
            </div>

            <input
              className="bg-gray-400/20 border   outline-gray-500 rounded-lg px-2 w-16 h-8 text-white"
              type="number"
              value={editingQuestion?.duration}
              onChange={(e) =>
                setEditingQuestion((prev) =>
                  prev ? { ...prev, duration: parseInt(e.target.value) } : prev,
                )
              }
              placeholder="30"
            />
            <button
              type="submit"
              className=" px-6 py-1 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
});

export default Edit;
