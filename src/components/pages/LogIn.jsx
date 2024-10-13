import signImage from "../../assets/sign.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../Contexts/auth";
import { useContext, useState } from "react";

function SignUp() {
  const { email, password, setEmail, setPassword } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex pr-10 mb-36 xs2:flex-col xs2:gap-16 xs2:items-center xs2:mx-10 md:justify-center md:flex-row md:gap-32">
      <img
        className="sm2:w-[605px] sm2:h-[581px] md:w-[805px] md:h-[781px]"
        src={signImage}
        alt=""
      />

      <div className="flex flex-col gap-6 mt-20 xs2:w-full md:max-w-[500px]">
        <h2 className="text-4xl self-start mb-2">Log in to Exclusive</h2>
        <p className="self-start ml-1">Enter your details below</p>
        <div className="flex flex-col xs2:w-full md:w-[400px]">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
            className="flex flex-col"
            onSubmit={handleLogIn}
          >
            <TextField
              id="standard-basic1"
              type="email"
              label="Email/Phone Number"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={error && error.includes("email")}
            />
            <TextField
              id="standard-basic"
              type="password"
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={error && error.includes("password")}
            />
            <button type="submit" style={{ display: "none" }}></button>
          </Box>
        </div>
        <div className="flex justify-between items-center gap-2 xs2:flex-col md:flex-row">
          <button
            className="bg-button2 text-white py-4 px-12 rounded-md border border-black hover:bg-white hover:text-button2"
            onClick={handleLogIn}
          >
            Log in
          </button>
          <div className="relative"></div>
          <div className="flex justify-center gap-4">
            <a className="text-button2 hover:underline" href="#">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
