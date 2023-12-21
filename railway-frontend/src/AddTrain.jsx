import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";

function AddTrain() {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [depTime, setDepTime] = useState("");
  const [time, setTime] = useState("");

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
        <Typography variant="h5">Add Train</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA" }}>
        <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth={true}
            label="Name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setSource(e.target.value);
            }}
            fullWidth={true}
            label="Source"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            fullWidth={true}
            label="Destination"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setArrivalTime(e.target.value);
            }}
            fullWidth={true}
            label="Arrival time"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setDepTime(e.target.value);
            }}
            fullWidth={true}
            label="Departure time"
            variant="outlined"
          />
            <br />
          <br />
          <TextField
            onChange={(e) => {
              setTime(e.target.value);
            }}
            fullWidth={true}
            label="Travel Time"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              function callback2(data) {
                alert("Train Added");
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              console.log("here");
              fetch("http://localhost:3000/admin/createtrain", {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  source: source,
                  destination: destination,
                  arrivalTime: arrivalTime,
                  depTime: depTime,
                  time: time,
                }),
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then(callback1);
            }}
          >
            Add Train
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddTrain;
