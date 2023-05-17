import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useCountry } from "../../../hooks/useCountry";
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
  const [country, setCountry] = useState("");

  // fetch countries
  const { countries, disable } = useCountry();

  // change the input variant
  const changeInputVariant = () => {
    setIsText(!isText);
  };

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();

    // check if the input fields are empty
    if (!name | !email | !phone | !password | !country) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
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
        country,
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
      localStorage.setItem("token", user.user.refreshToken);
      // redirect user to login
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
    }
  };

  return (
    // this is the container of the login page
    <section className="md:h-screen w-screen bg-bgColor text-white p-4">
      {/* card for the form */}
      <div className="w-[95%] md:w-[50%] mx-auto p-4 rounded bg-cardColor">
        {/* header for the card  */}
        <div className="flex flex-col items-center gap-3">
          <h4 className="capitalize text-3xl font-semibold">
            Welcome to Ultra-Capital
          </h4>
          <Link to="/login" className="underline capitalize">
            click here to login
          </Link>
        </div>
        {/* form body */}
        <form className="mt-10 space-y-6">
          {/* flex container */}
          <div className="flex items-center gap-3 flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="full name">Full Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-bgColor p-4 rounded my-3 outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bgColor p-4 rounded my-3 outline-none"
              />
            </div>
          </div>
          {/* end of flex container */}
          <div className="flex flex-col w-full">
            <label htmlFor="telephone number">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-bgColor p-4 rounded my-3 outline-none"
            />
          </div>
          {/* password flex container */}
          <div className="flex items-center gap-3 flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password">Password</label>
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
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password">Confirm Password</label>
              <div className="flex items-center bg-bgColor rounded px-2">
                <input
                  type={isText ? "text" : "password"}
                  name="password"
                  id="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="p-4 bg-transparent w-full outline-none"
                />
                {isText ? (
                  <Fa.FaEye onClick={changeInputVariant} />
                ) : (
                  <Fa.FaEyeSlash onClick={changeInputVariant} />
                )}
              </div>
            </div>
          </div>
          {/* end of flex container */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              className="bg-bgColor p-4 rounded outline-none text-white"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled={disable}
            >
              {countries.map((country) => (
                <option value={country.country}>{country.country}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="block text-center p-4 rounded w-full shadow-xl bg-bgColor"
            onClick={saveUser}
          >
            Create Account
          </button>
        </form>
        {/* end of form body */}
      </div>
      {/* end of card for the form */}
      <div className="h-[50px] md:h-0"></div>
      {/* extra box */}
    </section>
  );
};

export default Form;
