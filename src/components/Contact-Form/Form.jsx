import React, { useRef } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const nameRef = useRef();

  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  toast.configure();

  const sendMessage = (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !emailRef.current.value |
      !nameRef.current.value |
      !subjectRef.current.value |
      !messageRef.current.value
    ) {
      return toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    } else {
      return toast.success("message sent", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className="bg-card mx-auto md:w-[60%] w-[90%] p-3 rounded shadow">
      <div>
        <div>
          <div>
            <h1 className="font-serif text-2xl py-4">
              Let us here your complain
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
            <div className="flex flex-col gap-3 flex-1">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                ref={nameRef}
                className="border border-main_light rounded p-2 outline-none bg-blue-100 text-black"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="border border-main_light rounded p-2 outline-none bg-blue-100 text-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="subject">Subject</label>
            <input
              type="email"
              name="subject"
              ref={subjectRef}
              className="border border-main_light rounded outline-none bg-blue-100 text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              ref={messageRef}
              className="border border-main_light rounded outline-none text-black bg-blue-100 p-3"
            ></textarea>
          </div>
          <div className="my-6">
            <button
              className="bg-main w-full uppercase text-main_light rounded p-3"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
