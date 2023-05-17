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
import { doc, updateDoc, increment } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";
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
          variant="h4"
          component="div"
          sx={{
            textTransform: "capitalize",
            textDecoration: "underline",
            textAlign: "center",
            fontWeight: "bold",
            my: 3,
          }}
        >
          Choose An investment Strategy with Ultra Capital today
        </Typography>
      </Box>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="bg-cardColor rounded p-4 border border-neutral-400/40 shadow-xl space-y-6"
          >
            <div>
              <h4 className="font-sans-min uppercase text-lg font-semibold tracking-widest">
                {plan.title}
              </h4>
            </div>
            <div>
              <h4 className="font-sans-min uppercase text-2xl md:text-4xl font-bold">
                {plan.price}
              </h4>
            </div>
            <div className="flex justify-between items-center font-sans-min">
              <h4>ROI</h4>
              <span>{plan.roi}</span>
            </div>
            <div className="flex justify-between items-center font-sans-min">
              <h4>Duration</h4>
              <span>{plan.Duration}</span>
            </div>
            <button
              onClick={() => addInvestment(plan.min, plan.title)}
              className="my-6 p-4 uppercase text-lg font-sans-min shadow-xl rounded text-center block w-full bg-bgColor"
            >
              Get Started
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
        return toast.error("Insufficient balance", {
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        const newBalance = user.balance - investmentAmount;
        await updateDoc(doc(store, "users", user.email), {
          balance: newBalance,
          totalPackages: increment(1),
          activePackages: plan,
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
            variant="h6"
            component="h2"
            sx={{ my: 4 }}
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
