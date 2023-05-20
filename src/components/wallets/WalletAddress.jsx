import React, { useState, useContext } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { wallets } from "./wallets";
// modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 400,
    md: 600,
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const WalletAddress = () => {
  toast.configure();
  // set for the modal and clicked Coin
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState({});

  const location = useLocation();

  function openModal(coin) {
    const findCoin = wallets.find((wallet) => wallet.coin === coin);

    //  set the coin to findCoin
    setCoin(findCoin);

    setModal(true);
  }

  return (
    <>
      <Box sx={{ width: { xs: "80%", md: "100%" }, overflow: "hidden" }}>
        <Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", textDecoration: "underline" }}
            gutterBottom
          >
            Make Payment
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {`Please make your payment of $${location.state} to any of the digital assets below. Always verify and confirm you copied the wallet address correctly`}
          </Typography>
        </Box>
        <div>
          {/* flex container for the wallet icons */}
          <div className="flex md:flex-row flex-col items-center justify-center mt-10 w-[90%] mx-auto md:w-[50%] gap-8">
            {wallets.map((wallet) => (
              <div
                className="w-[20%] md:w-[10%] flex items-center flex-col space-y-4 cursor-pointer shadow-xl"
                key={wallet.coin}
              >
                <img
                  src={wallet.icon}
                  alt={wallet.coin}
                  className="rounded-full"
                  onClick={() => openModal(wallet.coin)}
                />
                <div>
                  <h4 className="text-center font-sans-min uppercase">
                    {wallet.coin}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <WalletForm /> */}
      </Box>
      <DepositModal
        open={modal}
        coin={coin}
        close={setModal}
        amount={location.state}
      />
    </>
  );
};

function DepositModal({ open, coin, close, amount }) {
  // configure the toast component
  toast.configure();

  // user context
  const { user } = useContext(UserContext);

  // navigation
  const navigate = useNavigate();

  // submit function
  const depositCoin = async () => {
    try {
      // update document
      const collectionRef = collection(
        store,
        "users",
        `/${user.email}`,
        "deposit"
      );

      await addDoc(collectionRef, {
        amount: parseInt(amount),
        date: serverTimestamp(),
        approved: false,
        method: coin.coin,
      });

      toast.info(`Deposit of $${amount} is Pending`, {
        theme: "colored",
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Payment Not Sent", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  const clipToBoard = (address, name) => {
    navigator.clipboard.writeText(address);
    toast.success(`${name} address has been copied !!`, {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <Modal open={open} onClose={() => close(false)}>
      <Box sx={style}>
        <div className="font-sans p-1 md:p-4 space-y-6">
          <div className="w-[50%] mx-auto">
            <img src={coin.barCode} alt={coin.name} />
          </div>
          <h4 className="text-center uppercase font-bold underline">
            {coin.coin}
          </h4>
          <div className="flex items-center gap-3 justify-center overflow-hidden">
            <div className="w-[20%] md:w-[20%] hidden md:block">
              <img src={coin.icon} alt={coin.coin} className="rounded-full" />
            </div>
            <h4
              className="font-semibold text-sm md:text-lg"
              onClick={() => clipToBoard(coin.address, coin.addressName)}
            >
              {coin.address}
            </h4>
          </div>
          <span className="text-red-400 mt-3 font-sans-min capitalize flex items-center justify-center">
            tap/click the address to copy
          </span>
          <div className="space-x-4 md:w-[50%] mx-auto flex items-center justify-center">
            <button
              type="submit"
              className="p-3 rounded bg-green-400 text-white font-bold flex-1"
              onClick={depositCoin}
            >
              Done
            </button>
            <button
              type="submit"
              className="font-bold bg-red-400 rounded text-white flex-1 p-3"
              onClick={() => close(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default WalletAddress;