import { Box, Modal } from "@mui/material";
import React, { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import { store, bucket } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const VerificationModal = ({ open, close }) => {
  // configure toast
  toast.configure();
  // Navigation Hook
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  //   state for the form
  const [address, setAddress] = useState("");
  const photoRef = useRef();

  //   get the user
  const { user } = useContext(UserContext);

  // submit function
  async function verifyUser(e) {
    e.preventDefault();

    try {
      if (!address | !photoRef.current.files[0]) {
        return toast.error("Please Fill the form properly", {
          position: "bottom-center",
          theme: "colored",
        });
      }
      // upload the photo to cloud storage
      const imgRef = ref(bucket, `images/${photoRef.current.files[0].name}`);
      await uploadBytes(imgRef, photoRef.current.files[0]);
      //   get the image url
      const imageUrl = await getDownloadURL(imgRef);

      // update document
      const docRef = doc(store, "users", `${user.email}`);
      await updateDoc(docRef, {
        address,
        clientId: imageUrl,
      });

      toast.info("Verification sent", {
        theme: "colored",
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Could not Process Form", {
        position: "bottom-center",
        theme: "colored",
      });
    }
  }

  return (
    <Modal open={open} onClose={() => close(false)}>
      <Box sx={style}>
        {/* form to upload ID and then address */}
        <form className="flex flex-col gap-4 font-sans-min">
          <div className="flex flex-col gap-2">
            <label htmlFor="Home Address">Home Address</label>
            <input
              type="text"
              name="address"
              className="p-4 bg-bgColor outline-none text-white rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="Home Address">Picture of Identification</label>
            <input
              type="file"
              name="address"
              className="bg-bgColor p-4 rounded"
              ref={photoRef}
            />
            <span className="my-3 capitalize text-red-600">
              This can be either a Nation ID,Driver license, Workers ID
            </span>
          </div>
          <button
            type="submit"
            className="p-4 bg-bgColor rounded uppercase text-lg shadow-xl"
            onClick={verifyUser}
          >
            Verify
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default VerificationModal;
