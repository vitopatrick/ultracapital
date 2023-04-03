import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    // the current page screen
    <div className="h-screen w-screen bg-bg text-white p-2">
      {/* the card of the current page */}
      <div className="bg-card mx-auto w-[90%] md:w-[60%] p-3 rounded">
        <div className="text-center">
          <Link
            to="/"
            className="font-serif text-3xl uppercase text-main hover:text-main_light hover:underline"
          >
            ultra capital
          </Link>
          <p>
            Click here to{" "}
            <Link
              to="/register"
              className="text-main hover:text-main_light underline uppercase my-2"
            >
              Create Account
            </Link>
          </p>
        </div>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              ref={emailRef}
              className="bg-blue-100 border text-black border-main_light rounded p-3 outline-none mt-2"
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="bg-blue-100 border text-black border-main_light rounded p-3 outline-none mt-2"
            />
          </div>
          <div className="text-left my-3">
            <Link
              to="/"
              className="text-main_light uppercase underline"
              onClick={resetPassword}
            >
              Forgot Password
            </Link>
          </div>
          <button
            className="bg-main hover:bg-main_light hover:text-main w-full p-2 text-xl uppercase rounded"
            onClick={loginUser}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
