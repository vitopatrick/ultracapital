import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import * as Fa from "react-icons/fa";

const Form = () => {
  // toast configuration
  toast.configure();
  // navigation router hook
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isText, setIsText] = useState(false);
  const [loading, setLoading] = useState(false);

  // change the input variant
  const changeInputVariant = () => {
    setIsText(!isText);
  };

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();

    // check if the input fields are empty - FIXED: Changed | to ||
    if (!name || !email || !phone || !password) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast("Passwords do not match", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    setLoading(true);
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.toLowerCase(),
        password
      );
      // add to the database
      await setDoc(doc(store, "users", email.toLowerCase()), {
        email: user.email.toLowerCase(),
        name,
        phone,
        password,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePackages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success("Welcome to Ultra-Capital", {
        position: "top-center",
        theme: "colored",
      });
      // save session
      localStorage.setItem("token", user.refreshToken);
      // redirect user to dashboard
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
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

  // Calculate password strength
  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = getPasswordStrength();

  return (
    <section className="min-h-screen w-screen bg-bgColor text-white p-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      {/* Registration Card */}
      <div className="w-full max-w-3xl relative z-10 my-8 animate-fadeIn">
        <div className="glass rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl font-bold mb-2">
              Join <span className="gradient-text">Ultra Capital</span>
            </h1>
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-primary-blue hover:text-primary-green transition-colors duration-300 font-semibold">
                Sign In
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={saveUser}>
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-bgColor/50 border border-white/10 rounded-xl p-4 outline-none input-modern focus:border-primary-blue transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

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
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone_number" className="text-sm font-semibold text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-bgColor/50 border border-white/10 rounded-xl p-4 outline-none input-modern focus:border-primary-blue transition-all duration-300"
                placeholder="+1 234 567 8900"
              />
            </div>

            {/* Password Row */}
            <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={changeInputVariant}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {isText ? <Fa.FaEye size={20} /> : <Fa.FaEyeSlash size={20} />}
                  </button>
                </div>
                {/* Password Strength Indicator */}
                {password && (
                  <div className="space-y-1">
                    <div className="flex gap-1">
                      {[25, 50, 75, 100].map((threshold) => (
                        <div
                          key={threshold}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${passwordStrength >= threshold
                              ? passwordStrength === 100
                                ? "bg-primary-green"
                                : passwordStrength >= 75
                                  ? "bg-accent-cyan"
                                  : passwordStrength >= 50
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              : "bg-white/10"
                            }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">
                      {passwordStrength === 100
                        ? "Strong password"
                        : passwordStrength >= 75
                          ? "Good password"
                          : passwordStrength >= 50
                            ? "Fair password"
                            : "Weak password"}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirm_password" className="text-sm font-semibold text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={isText ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-bgColor/50 border border-white/10 rounded-xl p-4 pr-12 outline-none input-modern focus:border-primary-blue transition-all duration-300"
                    placeholder="Confirm password"
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-primary text-white p-4 rounded-xl font-bold uppercase text-sm btn-modern glow-hover transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-primary-blue hover:text-primary-green transition-colors duration-300">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
