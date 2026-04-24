import { Clock, PartyPopper } from "lucide-react";
import React from "react";

function page() {
  return (
    <div>
      <section>
        <div>
          <div>
            <p>question 2 of 2</p>
          </div>
          <div>
            <div>
              <Clock />
              <span>12s</span>
            </div>
            <div>
              <span>Score</span>
              <span>0/0</span>
            </div>
          </div>
        </div>
        <div>progressbar</div>
      </section>
      <section>
        <div>
          <p>what is the question?</p>
          <button>
           option1
          </button>
          <button>
            option2
          </button>
          <button>
            option3
          </button>
          <button>
            option4
          </button>
          
        </div>
        <div>
            {/* conditional rendering */}
            <p>
                <PartyPopper />
                <p>Correct! Well done!</p>
            </p>
            <p>
                <span>X Incorrect! correct answer: </span>
                <span>option2</span>
            </p>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default page;
