import { onSnapshot, doc } from "firebase/firestore";
import { useState, useMemo } from "react";
import { store } from "../firebase";

export function useFetchUser(email) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const docRef = doc(store, "/users", email);

      onSnapshot(docRef, (data) => {
        setUser(data.data());
      });

      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useMemo(() => {
    const controller = new AbortController();
    fetchUser();

    return () => controller.abort();
  }, []);

  return { user, error, loading };
}
