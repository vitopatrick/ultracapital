import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";
import { FaChevronRight } from "react-icons/fa";

const Investment = () => {
  toast.configure();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (amount, plan) => {
    try {
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const balanceAmount = userDetails.data().balance;
      const depositedAmount = userDetails.data().deposited;
      const totalPackages = userDetails.data().totalPackages;

      if ((amount > balanceAmount) | (amount > depositedAmount)) {
        toast.error("insufficient Fund", {
          theme: "colored",
          position: "bottom-center",
        });
        navigate("/deposit");
      } else {

        const balance = parseInt(depositedAmount - amount);


        await updateDoc(docRef, {
          balance,
          totalPackages: totalPackages + 1,
          activePages: plan,
        });

        toast.info("Request Submitted", {
          theme: "colored",
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Typography
          variant="body1"
          component="div"
          sx={{
            textTransform: "capitalize",
          }}
        >
          Choose An investment Strategy with ultra capital today
        </Typography>
      </Box>
      <div className="font-sans grid md:grid-cols-3 gap-4 my-4">
        {plans.map((plan) => (
          <div className="bg-card p-3 rounded shadow overflow-hidden">
            <div>
              <h3 className="text-lg font-bold uppercase text-main">
                {plan.title}
              </h3>
            </div>
            <div className="flex gap-2 items-center font-bold my-4">
              <sub className="text-lg">$</sub>
              <h4 className="text-3xl text-main_light">{plan.price}</h4>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div>
                  <img src="/chevron-down.png" alt="" />
                </div>
                <p>Minimum Amount ${plan.min}</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src="/chevron-down.png" alt="" />
                </div>
                <p>Return of investment {plan.roi}</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src="/chevron-down.png" alt="" />
                </div>
                <p>Duration {plan.Duration}</p>
              </div>
            </div>
            <button
              className="my-4 bg-main p-2 flex items-center gap-3 uppercase"
              onClick={() => addInvestment(plan.price, plan.title)}
            >
              Get Started
              <FaChevronRight />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Investment;
