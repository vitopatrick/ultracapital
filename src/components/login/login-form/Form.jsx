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
  const [loading, setLoading] = useState(false);

  // change the input variant
  const changeInputVariant = () => {
    setIsText(!isText);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty - FIXED: Changed | to ||
    if (!email || !password) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    setLoading(true);
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
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    } finally {
      setLoading(false);
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
    <div className="min-h-screen w-screen bg-bgColor text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10 animate-fadeIn">
        <div className="glass rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl font-bold mb-2">
              <span className="gradient-text">Welcome Back</span>
            </h1>
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary-blue hover:text-primary-green transition-colors duration-300 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={loginUser}>
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bgColor/50 border border-white/10 rounded-xl p-4 outline-none input-modern focus:border-primary-blue transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={isText ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-bgColor/50 border border-white/10 rounded-xl p-4 pr-12 outline-none input-modern focus:border-primary-blue transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={changeInputVariant}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {isText ? <Fa.FaEye size={20} /> : <Fa.FaEyeSlash size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <button
              type="button"
              onClick={resetPassword}
              className="text-primary-blue hover:text-primary-green transition-colors duration-300 text-sm font-semibold"
            >
              Forgot Password?
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-primary text-white p-4 rounded-xl font-bold uppercase text-sm btn-modern glow-hover transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Logging In...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              By continuing, you agree to our{" "}
              <Link to="/terms" className="text-primary-blue hover:text-primary-green transition-colors duration-300">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
