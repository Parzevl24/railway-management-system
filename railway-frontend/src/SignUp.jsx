// //We can write this on our own but instead we use the liberaries as it is usefull and already written for us
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import { useCallback, useState } from "react";

// function Signup() {
//   //using states for gettin the input from the textboxes
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       {email}
//       <div
//         style={{
//           paddingTop: 150,
//           paddingBottom: 10,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h5">Welcome to CoursEra</Typography>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Card variant="outlined" style={{ width: 400, padding: 20 }}>
//           <TextField
//             fullWidth={true}
//             id="username"
//             // the below thing sends the thing written in  the email to the email state
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             label="UserName"
//             variant="outlined"
//           />
//           <br />
//           <br />
//           <TextField
//             fullWidth={true}
//             id="password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             label="Password"
//             variant="outlined"
//           />
//           <br />
//           <br />

          
//           <Button
//             variant="contained"
//             onClick={() => {
//               //   let username = document.getElementById("username").value;
//               //   let password = document.getElementById("password").value;
//               // now as we are using states no need of the upper code in which we use get, instead we will directly use it in the below body
//               function callback2(data) {
//                 localStorage.setItem("token", data.token);
//               }
//               function callback1(res) {
//                 res.json().then(callback2);
//               }
//               fetch("http://localhost:3000/admin/signup", {
//                 method: "POST",
//                 body: JSON.stringify({
//                   username: email,
//                   password: password,
//                 }),
//                 headers: {
//                   "Content-type": "application/json",
//                 },
//               }).then(callback1);
//             }}
//           >
//             Sign up
//           </Button>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default Signup;











////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSignup() {
    const userData = {
      username: email,
      password: password,
    };

    fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup failed."); // Handle the error response here
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate('/home');
        // Handle successful signup and navigation if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors occurred during the fetch
      });
  }

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          paddingBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Welcome to Trains</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA" }}>
          <TextField
            fullWidth={true}
            id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="UserName"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained" style={{background:"#E2F6CA", color: "black"}} onClick={handleSignup}>
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
