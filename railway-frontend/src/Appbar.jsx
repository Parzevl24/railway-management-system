import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import TrainIcon from "@mui/icons-material/Train";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  
  useEffect(() => {
    function fetchUser() {
      fetch("http://localhost:3000/admin/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.username) {
            setUserEmail(data.username);
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserEmail(null);
  };

  return (
    <AppBar position="static" style={{background:"#512B81"}}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "White"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {<TrainIcon />}
          {/* <Avatar src="/path/to/train-logo.png" alt="Train Logo" sx={{ width: 32, height: 32, marginRight: 10 }} /> */}
          <Typography variant="h6">E-Train</Typography>
        </div>

        {userEmail ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" style={{ marginRight: 10 }}>
              {userEmail}
            </Typography>
            <Button variant="contained" style={{background:"#4477CE"}} onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Button
              style={{background:"#E2F6CA", color: "black"}}
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
              style={{ marginLeft: 10, background:"#E2F6CA", color: "black"  }}
            >
              Sign In
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
