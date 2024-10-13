import signImage from "../../assets/sign.png";
import glogo from "../../assets/glogo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/auth";

function SignUp() {
  const { user, name, setName, email, setEmail, password, setPassword } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log(user);
  };
  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex pr-10 mb-36 xs2:flex-col xs2:gap-4 xs2:justify-center xs2:items-center xs2:mx-10 md:justify-center md:flex-row md:gap-32">
      <img
        className="sm2:w-[605px] sm2:h-[581px] md:w-[805px] md:h-[781px]"
        src={signImage}
        alt=""
      />

      <div className="flex flex-col gap-6 mt-20 xs2:w-full xs2:items-center md:max-w-[500px]">
        <h2 className="text-5xl self-start mb-2">Create an account</h2>
        <p className="self-start ml-1">Enter your details below</p>
        <div className="flex flex-col xs2:w-full md:w-[400px]">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
            className="flex flex-col"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Email/phone"
              variant="standard"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </div>
        <button
          className="bg-button2 text-white p-4 rounded-md border border-black w-full hover:bg-white hover:text-button2"
          onClick={(e) => handleSignUpWithEmail(e)}
        >
          Create Account
        </button>
        <div className="relative w-full">
          <button
            className="border w-full p-4 rounded-md border-black hover:bg-button2 hover:text-white"
            onClick={handleSignInWithGoogle}
          >
            <img
              className="absolute w-4 h-4 xs2:left-5 md:left-20 top-1/2 transform -translate-y-1/2"
              src={glogo}
              alt=""
            />
            Sign Up with Google
          </button>
        </div>
        <div className="flex justify-center xs2:gap-3 md:gap-4">
          <p className="text-gray-600">already have an account?</p>
          <Link to="/login" className="text-gray-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
