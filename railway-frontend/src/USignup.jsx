import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function USignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    const userData = {
      email: email, // Use 'email' instead of 'username'
      password: password,
    };

    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup failed."); // Consider providing more specific error messages
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate('/user/home');
      })
      .catch((error) => {
        console.error("Signup error:", error); // Improved error logging
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
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            id="email" // Use 'email' instead of 'username'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email" // Use 'Email' instead of 'UserName'
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="password"
            type="password" // Set the input type to 'password' for security
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSignup}>
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default USignup;
