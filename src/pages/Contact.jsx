/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Contact-Form/Form";
import Address from "../components/Contact-Info/Address";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <section className=" w-screen bg-bg text-white">
      <Navbar />
      <Form />
      <Address />
      <Footer />
    </section>
  );
};

export default Contact;
