// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

// function Signin() {

//   return (
//     <div
//       style={{
//         paddingTop: 150,
//         paddingBottom: 10,
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card variant="outlined" style={{ width: 400, padding: 20 }}>
//         <TextField
//           fullWidth={true}
//           id="UserName"
//           label="UserName"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           variant="outlined"
//         />
//         <br />
//         <br />
//         <TextField
//           fullWidth={true}
//           id="password"
//           label="password"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           variant="outlined"
//         />
//         <br />
//         <br />
//         <Button variant="contained" onClick={handleSignin}>Sign In</Button>
//       </Card>
//     </div>
//   );
// }

// export default Signin;
///////////////////////////////////////////////////////



import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import {ADMINS} from "../../index.js";

const ADMINS = [
  { username: "priyansu@gmail.com", password: "123456" },
  { username: "admin2", password: "password2" },
  // Add more admin objects as needed
];

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    const foundAdmin = ADMINS.find((admin) => admin.username === username && admin.password === password);
    if (foundAdmin) {
      alert("Logged in"); // You can replace this with your desired login logic
      // Perform any other actions you want after successful login, e.g., redirect to another page.
      navigate("/dashboard"); // Change "/dashboard" to the desired URL to redirect after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      style={{
        paddingTop: 150,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card variant="outlined" style={{ width: 400, padding: 20, color:"#eeeeee" }}>
        <TextField
          fullWidth={true}
          id="UserName"
          label="UserName"
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          fullWidth={true}
          id="password"
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleSignin}>Sign In</Button>
      </Card>
    </div>
  );
}

export default Signin;
