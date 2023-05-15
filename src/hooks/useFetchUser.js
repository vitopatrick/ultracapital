import { onSnapshot, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { store } from "../firebase";
import { UserContext } from "../context/UserContext";

export function useFetchUser() {
  // fetch the user from the user context
  const { user: state } = useContext(UserContext);
  // state for fetching and user details
  const [userDetails, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);

        // doc Ref
        const docRef = doc(store, "users", `${state.email}`);

        //  fetch the user from firestore
        await onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setDetails({ ...doc.data() });

            setTimeout(() => {
              setLoading(false);
            }, 3000);
          } else {
            setError("User not found");
            setLoading(false);
          }
        });
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUser();

    return () => controller.abort();
  }, [state.email]);

  return {
    user: userDetails,
    loading,
    error,
  };
}
