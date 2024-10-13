import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, email, setEmail, password, setPassword, name, setName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
