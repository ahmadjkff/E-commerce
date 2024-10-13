import phone from "../../assets/phone.png";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div>
      <p className="text-start">
        <span className="text-gray-400 ml-20">Home /</span> Contact
      </p>

      <div className="flex justify-start mx-20 xs2:flex-col md:flex-col lg:flex-row xs2:gap-2 md:gap-8 xs2:items-center xs2:justify-center">
        <div className="container1 flex flex-col w-[340px] p-9 shadow-md my-20">
          <div className="flex gap-4">
            <img className="w-10 rounded-full" src={phone} alt="" />
            <p className="text-[16px] mt-2">Call To Us</p>
          </div>
          <p className="mt-6 text-[14px] text-start">
            We are available 24/7, 7 days a week.
          </p>
          <p className="mt-3 text-start">Phone: +8801611112222</p>

          <hr className="border-t border-gray-400 my-8 w-[270px]" />

          <div className="flex flex-col justify-center gap-3 ">
            <div className="flex gap-4">
              <img className="w-10 rounded-full" src={phone} alt="" />
              <p className="text-[16px] mt-2">Write To Us</p>
            </div>
            <p className=" mt-3 text-[14px] text-start leading-loose">
              Fill out our form and we will contact you within 24 hours.{" "}
            </p>
            <p className="text-start">Emails: customer@exclusive.com</p>
            <p className="text-start">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="shadow-md my-20 xs2:min-w-[320px] md:w-full">
          <div className="flex flex-col gap-[22px] mt-10 p-8">
            <div className="flex gap-4 justify-center xs2:px-0 md:px-8 xs2:flex-col md:flex-row">
              <TextField
                required
                id="standard-basic"
                label="Name"
                variant="filled"
                fullWidth
              />
              <TextField
                required
                id="standard-basic"
                label="Email/phone"
                variant="filled"
                fullWidth
              />
              <TextField
                required
                id="standard-basic"
                label="Password"
                variant="filled"
                fullWidth
              />
            </div>
            <div className="xs2:px-0 md:px-8">
              <TextField
                id="filled-textarea"
                label="Your Massage"
                placeholder="Your Massage"
                multiline
                variant="filled"
                fullWidth
                minRows={8}
              />
            </div>

            <div className="flex mt-12 xs2:justify-center md:justify-end">
              <button className="bg-button2 text-white px-12 py-4 rounded-md border border-black hover:bg-white hover:text-button2">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// function Contact() {
//   return (
//     <div className="flex justify-start mx-20 sm:flex-col md:flex-row sm:gap-2 md:gap-8">
//       <p className="text-start">
//         <span className="text-gray-400">Home /</span> Contact
//       </p>

//       <div className="container1 flex flex-col w-[340px] p-9 shadow-md my-20">
//         <div className="flex gap-4">
//           <img className="w-10 rounded-full" src={phone} alt="" />
//           <p className="text-[16px] mt-2">Call To Us</p>
//         </div>
//         <p className="mt-6 text-[14px] text-start">
//           We are available 24/7, 7 days a week.
//         </p>
//         <p className="mt-3 text-start">Phone: +8801611112222</p>

//         <hr className="border-t border-gray-400 my-8 w-[270px]" />

//         <div className="flex flex-col justify-center gap-3 ">
//           <div className="flex gap-4">
//             <img className="w-10 rounded-full" src={phone} alt="" />
//             <p className="text-[16px] mt-2">Write To Us</p>
//           </div>
//           <p className=" mt-3 text-[14px] text-start leading-loose">
//             Fill out our form and we will contact you within 24 hours.{" "}
//           </p>
//           <p className="text-start">Emails: customer@exclusive.com</p>
//           <p className="text-start">Emails: support@exclusive.com</p>
//         </div>
//       </div>

//       <div className="shadow-md my-20">
//         <div className="flex flex-col gap-[22px] mt-10 p-8">
//           <div className="flex gap-4 justify-center px-8 sm:flex-col md:flex-row">
//             <TextField
//               required
//               id="standard-basic"
//               label="Name"
//               variant="filled"
//               fullWidth
//             />
//             <TextField
//               required
//               id="standard-basic"
//               label="Email/phone"
//               variant="filled"
//               fullWidth
//             />
//             <TextField
//               required
//               id="standard-basic"
//               label="Password"
//               variant="filled"
//               fullWidth
//             />
//           </div>
//           <div className="px-8">
//             <TextField
//               id="filled-textarea"
//               label="Your Massage"
//               placeholder="Your Massage"
//               multiline
//               variant="filled"
//               fullWidth
//               minRows={8}
//             />
//           </div>

//           <div className="flex justify-end mt-12">
//             <button className="bg-button2 text-white px-12 py-4 rounded-md">
//               Send Massage
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
