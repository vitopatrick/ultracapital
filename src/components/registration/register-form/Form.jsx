import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useCountry } from "../../../hooks/useCountry";

const Form = () => {
  // toast configuration
  toast.configure();
  // navigation router hook
  const navigate = useNavigate();
  // refs for form
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const [country, setCountry] = useState("");

  // fetch countries
  const { countries } = useCountry();

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();

    // check if the input fields are empty
    if (
      !nameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value |
      !country
    ) {
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
        emailRef.current.value.toLowerCase(),
        passwordRef.current.value
      );
      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value.toLowerCase()), {
        email: user.email.toLowerCase(),
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success("Welcome to ultra capital", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      navigate("/login");
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
    <section className="md:h-screen w-screen bg-bg text-white p-3 m-0">
      {/* this is the card for the form component */}
      <div className="bg-card shadow-sm shadow-card rounded mx-auto w-full md:w-[60%]">
        {/* container for the main body */}
        <div className="p-3">
          {/* the header for the form */}
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="font-serif text-3xl uppercase text-main hover:text-main_light hover:underline"
            >
              ultra capital
            </Link>
            <p className="capitalize text-center">
              If you already have an account with us click here to{" "}
              <Link
                to="/login"
                className="font-bold uppercase text-main underline hover:text-main_light"
              >
                Login
              </Link>
            </p>
          </div>
          {/* end of the header section */}
          {/* form input sections */}
          {/* start of the flex container */}
          <div className="flex md:items-center flex-col md:flex-row gap-4 justify-between my-3">
            <div className="flex-1">
              <label htmlFor="full Name">Full Name</label>
              <div className="w-full bg-blue-100 border border-main_light rounded">
                <input
                  type="text"
                  className="w-full bg-transparent text-black p-2 outline-none"
                  ref={nameRef}
                />
              </div>
            </div>
            {/* div for the email container */}
            <div className="flex-1">
              <label htmlFor="full Name">Email</label>
              <div className="w-full bg-blue-100 border border-main_light rounded">
                <input
                  type="text"
                  className="w-full bg-transparent p-2 text-black outline-none"
                  ref={emailRef}
                />
              </div>
            </div>
            {/* end of the email container */}
          </div>
          {/* end of the flex container */}
          {/* start of the flex container */}
          <div className="flex flex-col gap-4 justify-between my-3">
            <div className="flex-1">
              <label htmlFor="full Name">Password</label>
              <div className="w-full bg-blue-100 border border-main_light rounded">
                <input
                  type="password"
                  className="w-full bg-transparent p-2 text-black outline-none"
                  ref={passwordRef}
                />
              </div>
            </div>
            {/* div for the Telephone container */}
            <div className="flex-1">
              <label htmlFor="full Name">Telephone</label>
              <div className="w-full bg-blue-100 border border-main_light rounded">
                <input
                  type="tel"
                  className="w-full bg-transparent p-2 text-black outline-none"
                  ref={phoneRef}
                />
              </div>
            </div>
            {/* end of the telephone container */}
          </div>
          {/* end of the flex container */}
          {/* the select country input field */}
          <div className="my-4 flex flex-col">
            <label htmlFor="Country of origin">Country of Origin</label>
            <div className="bg-blue-100 border border-main_light rounded">
              <select
                name="country of origin"
                id="country_of_origin"
                className="w-full bg-transparent p-2 text-black outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option value={country.main}>{country.main}</option>
                ))}
              </select>
            </div>
          </div>
          {/* end of the select country input field */}
          {/* end of the form input section */}
          {/* button and terms and condition section */}
          <div>
            <div className="text-center">
              <p className="my-3">
                By Clicking Register you therefore agree to the{" "}
                <Link
                  to="/terms"
                  className="uppercase text-main underline hover:text-main_light"
                >
                  Terms & Conditions
                </Link>
                {""} of ultra capital
              </p>
            </div>
            <button
              className="w-full bg-main hover:bg-main_light rounded py-2 text-xl uppercase hover:text-main"
              onClick={saveUser}
            >
              Register
            </button>
          </div>
          {/* end of terms and condition section */}
          {/* copyright and legal section */}
          <div className="text-center mt-2">
            <p className="text-primary">
              © Copyright {new Date().getFullYear()} ultra capital All Rights
              Reserved.
            </p>
          </div>
          {/* end of the legal section */}
        </div>
      </div>
      <div className="p-4"></div>
    </section>
  );
};

export default Form;
