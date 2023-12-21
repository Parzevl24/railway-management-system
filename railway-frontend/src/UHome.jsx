import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TrainIcon from "@mui/icons-material/Train";
import { useNavigate } from "react-router-dom";

const colorPalette = {
  primary: "#78C1F3",
  secondary: "#9BE8D8",
  tertiary: "#E2F6CA",
  accent: "#F8FDCF",
};

function Uhome() {
  const navigate = useNavigate();

  const handleSearchTrains = () => {
    navigate('/user/trains');
  };

  const handleBookings = () => {
    navigate('/user/bookings');
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" style={{ color: colorPalette.primary }}>
            Welcome to E-Train
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" style={{background:"#BEADFA"}} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom  >
              Explore Trains
            </Typography>
            <Typography variant="body1" gutterBottom>
              Plan your journey by searching for available trains.
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSearchTrains}
              startIcon={<TrainIcon />}
              style={{ backgroundColor: colorPalette.tertiary, color: "black" }}
            >
              Search Trains
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" style={{background:"#BEADFA"}} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom style={{ color: "black" }}>
              Your Bookings
            </Typography>
            <Typography variant="body1" gutterBottom>
              View and manage your booked tickets.
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleBookings}
              style={{ backgroundColor: colorPalette.accent, color: "black" }}
            >
              View Bookings
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Uhome;
