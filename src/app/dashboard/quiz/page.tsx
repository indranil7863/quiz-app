import { Clock, PartyPopper } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className=" w-full min-h-screen flex flex-col gap-4">
      <div className=" w-full bg-secondary-background text-secondary-foreground">
        <section className="lg:w-[80%] w-[90%] mx-auto">
          <div className=" flex sm:justify-between justify-center  gap-4 items-center flex-wrap px-4 py-2">
            <div>
              <p className=" px-2 py-1 rounded-lg bg-gray-600/20">
                question 2 of 2
              </p>
            </div>
            <div className="center-div gap-6">
              <div className="center-div gap-2">
                <Clock />
                <span>12s</span>
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
        <p className="text-center md:text-3xl text-xl">what is the question?</p>
        <div className="grid lg:grid-cols-2 w-full grid-cols-1 md:w-full md:grid-cols-1 lg:w-[60%] mx-auto gap-4 items-center py-2 px-2">
          <button className=" py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            option1
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            option2
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            option3
          </button>
          <button className="py-4 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50">
            option4
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
