import {
  CirclePlus,
  CirclePlusIcon,
  Clock,
  MoveLeft,
  Save,
  Trash,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className=" w-full sticky top-0  py-2 bg-secondary-background text-secondary-foreground z-4">
        <div className="w-[90%] mx-auto flex justify-between items-center px-2 py-2">
          <div className="center-div gap-4">
            <button className="center-div gap-4 px-4 rounded-lg hover:scale-102 hover:bg-gray-600/40 transition duration-150 py-1">
              <MoveLeft />
              <span>Back</span>
            </button>
            <p className="text-2xl">Create New Quiz</p>
          </div>
          <div>
            <Link
              className="center-div gap-4 px-4 py-1 rounded-lg bg-gray-500/30 hover:bg-gray-700/30"
              href={"/dashboard"}
            >
              <Save size={18} />
              <span>Save Quiz</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="flex lg:flex-row flex-col gap-2 py-2 lg:justify-center  w-[90%] mx-auto">
        <section className="flex flex-col justify-center gap-8 flex-1  max-w-[400px] py-4 px-2">
          <div className=" max-w-87.5 flex flex-col bg-card-background text-card-foreground gap-2 rounded-lg py-4 px-4">
            <h3 className="font-medium">Quiz Information</h3>
            <label htmlFor="Title">
              <p className="pb-1">Quiz Title</p>
              <input
                className="w-full px-2 py-1 outline-gray-500 bg-gray-400/20 rounded-lg"
                type="text"
                id="Title"
                placeholder="Enter quiz title"
              />
            </label>
            <label htmlFor="description">
              <p className="pb-1">Description</p>
              <input
                className="w-full px-2 py-1 outline-gray-500 bg-gray-400/20 rounded-lg"
                type="text"
                id="description"
                placeholder="Enter quiz description"
              />
            </label>
            <div className="flex justify-between">
              <span>Questions: 2</span>
              <span>2 total</span>
            </div>
          </div>
          <div className=" max-w-87.5 flex flex-col  bg-card-background text-card-foreground gap-4 rounded-lg py-4 px-4">
            <div className="flex justify-between items-center">
              <span>Questions</span>
              <button className="center-div gap-2 bg-button-background text-button-foreground hover:bg-button-background/50 px-2 py-1 rounded-lg">
                <CirclePlus size={18} />
                <span>Add Question</span>
              </button>
            </div>
            <div className="flex flex-col gap-2 items-center">
              {/* foreach loop */}
              <div className="flex justify-between items-center  border w-full px-2 rounded-lg">
                <div className="flex-1 py-2">
                  <p>question 1</p>
                  <input
                    className="w-full rounded-lg px-2 outline-none"
                    type="text"
                    value="Untitled question"
                    readOnly
                  />
                </div>
                <button className="px-2">
                  <Trash size={18} color="red" />
                </button>
              </div>
              <div className="flex justify-between items-center  border w-full px-2 rounded-lg">
                <div className="flex-1 py-2">
                  <p>question 1</p>
                  <input
                    className="w-full rounded-lg px-2 outline-none"
                    type="text"
                    value="Untitled question"
                    readOnly
                  />
                </div>
                <button className="px-2">
                  <Trash size={18} color="red" />
                </button>
              </div>
              <div className="flex justify-between items-center  border w-full px-2 rounded-lg">
                <div className="flex-1 py-2">
                  <p>question 1</p>
                  <input
                    className="w-full rounded-lg px-2 outline-none"
                    type="text"
                    value="Untitled question"
                    readOnly
                  />
                </div>
                <button className="px-2">
                  <Trash size={18} color="red" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-1 px-2 py-2 relative">
          <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col items-center gap-2">
              <CirclePlusIcon size={50} />
              <p className="text-xl text-gray-500">Select a question to edit</p>
              <p className="text-gray-500">
                Choose a question from the list or add a new one to get started.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[98%] absolute top-10 shadow-2xl left-2 z-2 gap-4 px-4 py-4 bg-card-background text-card-foreground rounded-lg">
            <h3 className="font-medium text-xl">Edit Question</h3>
            <label className="flex flex-col gap-2" htmlFor="question-text">
              <span>Question Text</span>
              <input
                className="px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                type="text"
                id="question-text"
                placeholder="Enter your question"
              />
            </label>

            <div className="flex flex-col gap-2">
              <p>Answer Options</p>
              <div className="flex lg:flex-row gap-2 items-center">
                <input
                  className=""
                  type="radio"
                  id="Option1"
                  name="question"
                  value="option1"
                />
                <label className="pr-2" htmlFor="Option1">
                  Correct
                </label>
                <input
                  className="w-full px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                  type="text"
                  placeholder="Option 1"
                />
              </div>
              <div className="flex lg:flex-row gap-2 items-center">
                <input
                  type="radio"
                  id="Option2"
                  name="question"
                  value="option2"
                />
                <label className="pr-2" htmlFor="Option2">
                  Correct
                </label>
                <input
                  className="w-full px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                  type="text"
                  placeholder="Option 2"
                />
              </div>
              <div className="flex lg:flex-row gap-2 items-center">
                <input
                  type="radio"
                  id="Option3"
                  name="question"
                  value="option3"
                />
                <label className="pr-2" htmlFor="Option3">
                  Correct
                </label>
                <input
                  className="w-full px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                  type="text"
                  placeholder="Option 3"
                />
              </div>
              <div className="flex lg:flex-row gap-2 items-center">
                <input
                  type="radio"
                  id="Option4"
                  name="question"
                  value="option4"
                />
                <label className="pr-2" htmlFor="Option4">
                  Correct
                </label>
                <input
                  className="w-full px-2 py-2 outline-gray-500 bg-gray-400/20 rounded-lg"
                  type="text"
                  placeholder="Option 4"
                />
              </div>
            </div>
            <div className="flex justify-between w-[90%] mx-auto py-4">
              <div className="center-div gap-2">
                <Clock size={18} />
                <p>Time Limit (seconds)</p>
              </div>
              <input
                className="bg-gray-400/20  outline-gray-500 rounded-lg px-2 w-16 h-8 text-white"
                type="number"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
