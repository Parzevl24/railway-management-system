import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function home() {
    const navigate = useNavigate();
    function addTrain(){
        navigate('/addtrain')
    }
    function getTrains(){
        navigate('/gettrains')
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
        <Typography variant="h5">Welcome to E-Train</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA"}}>
          <Button variant="contained" style={{background:"#E2F6CA", color: "black"}} onClick={getTrains}>
            Get Trains
          </Button>
          <br />
          <br />
          <Button variant="contained" style={{background:"#E2F6CA", color: "black"}} onClick={addTrain}>
            Add Train
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default home;
