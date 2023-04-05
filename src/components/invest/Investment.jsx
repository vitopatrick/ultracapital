import React, { useContext, useState } from "react";
import {
  Typography,
  Box,
  Modal,
  TextField,
  Button,
  Backdrop,
  Fade,
  Divider,
} from "@mui/material";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";
import { FaChevronRight } from "react-icons/fa";
import { useFetchUser } from "../../hooks/useFetchUser";

// the modal component
const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -20%)",
  width: { xs: "90%", md: 600 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 2, md: 3 },
};

const Investment = () => {
  toast.configure();

  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(0);
  const [plan, setPlan] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const addInvestment = (amount = 0, plan) => {
    setMin(amount);
    setPlan(plan);
    setOpen(true);
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
          <div
            key={plan.title}
            className="bg-card p-3 rounded shadow overflow-hidden"
          >
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
              onClick={() => addInvestment(plan.min, plan.title)}
            >
              Get Started
              <FaChevronRight />
            </button>
          </div>
        ))}
      </div>
      <InvestmentModal
        handleClose={handleClose}
        open={open}
        min={min}
        plan={plan}
      />
    </>
  );
};

const InvestmentModal = ({ handleClose, open, min, plan }) => {
  const { user: state } = useContext(UserContext);

  const navigate = useNavigate();

  const [investmentAmount, setInvestmentAmount] = useState(0);

  const { user } = useFetchUser(state.email);

  const updateUser = async () => {
    try {
      if (investmentAmount < min) {
        return toast.error("Amount is less than minimum", {
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (user.balance < investmentAmount) {
        const newBalance = user.deposited - investmentAmount;

        await updateDoc(doc(store, "users", user.email), {
          balance: newBalance,
          totalPackages: user.totalPackages + 1,
          activePages: plan,
        });

        navigate("/dashboard");
      } else {
        const newBalance = user.balance - investmentAmount;
        await updateDoc(doc(store, "users", user.email), {
          balance: newBalance,
          totalPackages: user.totalPackages + 1,
          activePages: plan,
        });

        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("could not perform operation", {
        position: "bottom-center",
        theme: "colored",
      });
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="body1"
            component="h2"
          >
            Enter Amount, Amount should not be less than ${min}
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Enter amount"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              sx={{ my: 2 }}
              type="number"
            />
            <Button variant="contained" color="primary" onClick={updateUser}>
              Submit
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Investment;
