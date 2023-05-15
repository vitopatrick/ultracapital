import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import * as Fa from "react-icons/fa";

const Form = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isText, setIsText] = useState(false);

  // change the input variant
  const changeInputVariant = () => {
    setIsText(!isText);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!email | !password) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // store the token in session
      localStorage.setItem("token", user.user.refreshToken);
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
      if (!email) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, email);
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
    <div className="h-screen w-screen bg-bgColor text-white p-2">
      {/* card body */}
      <div className="w-[95%] md:w-[50%] mx-auto p-4 shadow-lg rounded bg-cardColor">
        {/* card header */}
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-semibold text-3xl underline">Welcome</h4>
          <p className="font-sans-min">
            if you do not have an account{" "}
            <Link to="/register" className="underline">
              Click Here to Register
            </Link>
          </p>
        </div>
        {/* form body */}
        <form className="space-y-6 my-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-bgColor p-4 rounded outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <div className="flex items-center bg-bgColor rounded px-2">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 bg-transparent w-full outline-none"
              />
              {isText ? (
                <Fa.FaEye onClick={changeInputVariant} />
              ) : (
                <Fa.FaEyeSlash onClick={changeInputVariant} />
              )}
            </div>
          </div>
          {/* forgotten password */}
          <button
            type="submit"
            onClick={resetPassword}
            className="block w-fit text-red-500 capitalize"
          >
            forgot password
          </button>
          {/* form button */}
          <button
            type="submit"
            onClick={loginUser}
            className="uppercase block text-center w-full bg-bgColor p-4 rounded hover:bg-bgColor/40 transition all ease in"
          >
            Log In
          </button>
        </form>
      </div>
      {/* end of card body */}
    </div>
  );
};

export default Form;
