import { onSnapshot, doc } from "firebase/firestore";
import { useState, useMemo } from "react";
import { store } from "../firebase";

export function useFetchUser(email) {
                                      // state for Error,user and Loading states.
                                      const [user, setUser] = useState(null);
                                      const [error, setError] = useState(null);
                                      const [loading, setLoading] = useState(
                                        false
                                      );

                                      // function to fetch the user from the data storage
                                      const fetchUser = async () => {
                                        try {
                                          setLoading(true);
                                          const docRef = doc(
                                            store,
                                            "/users",
                                            email
                                          );

                                          onSnapshot(docRef, (data) => {
                                            setUser(data.data());
                                          });

                                          setLoading(false);
                                        } catch (error) {
                                          setError(error.message);
                                        }
                                      };

                                      // use memo hook to memorize the data and then save the rerendering process.
                                      useMemo(() => {
                                        const controller = new AbortController();
                                        fetchUser();

                                        return () => controller.abort();
                                      }, []);

                                      // return the user, error and then loading state.
                                      return { user, error, loading };
                                    }
