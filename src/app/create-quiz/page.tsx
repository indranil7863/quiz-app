import React from 'react'

export const page = () => {
  return (
    <div>
        <section>
            <div>
                <h3>Quiz Information</h3>
                <label htmlFor="Title">
                    <p>Quiz Title</p>
                    <input type="text" id='Title' placeholder='Enter quiz title'/>
                </label>
                <label htmlFor="description">
                    <p>Description</p>
                    <input type="text" id='description' placeholder='Enter quiz description'/>
                </label>
                <div>
                    <span>Questions: 2</span>
                    <span>2 total</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Questions</span>
                    <button>
                        <CirclePlus />
                        <span>Add Question</span>
                    </button>
                </div>
                <div>
                    {/* foreach loop */}
                    <div>
                       <div>
                         <p>question 1</p>
                        <input type="text" readOnly/>
                       </div>
                        <div>
                            <Trash />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h3>Edit Question</h3>
            <label htmlFor="question-text">
                <span>Question Text</span>
                <input type="text" placeholder='Enter your question' />
            </label>
            <p>Answer Options</p>
            <div>
                
            </div>
        </section>
    </div>
  )
}
