import signImage from "../../assets/sign.png";
import glogo from "../../assets/glogo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex pr-10 mb-36 xs:flex-col xs:gap-16 xs:justify-center xs:items-center xs:mx-10 md:justify-center md:flex-row md:gap-32">
      <img
        className="sm:w-[605px] sm:h-[581px] md:w-[805px] md:h-[781px]"
        src={signImage}
        alt=""
      />

      <div className="flex flex-col gap-6 mt-20 max-w-[500px]">
        <h2 className="text-5xl self-start mb-2">Create an account</h2>
        <p className="self-start ml-1">Enter your details below</p>
        <div className="flex flex-col w-[400px]">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
            className="flex flex-col"
          >
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField
              id="standard-basic"
              label="Email/phone"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </Box>
        </div>
        <button className="bg-button2 text-white p-4 rounded-md border border-black hover:bg-white hover:text-button2">
          Create Account
        </button>
        <div className="relative">
          <button className="border w-full p-4 rounded-md border-black hover:bg-button2 hover:text-white">
            <img
              className="absolute w-4 h-4 left-20 top-1/2 transform -translate-y-1/2"
              src={glogo}
              alt=""
            />
            Sign Up with Google
          </button>
        </div>
        <div className="flex justify-center gap-4">
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
