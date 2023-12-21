import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import axios from "axios";

function GTrains() {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        async function fetchTrains() {
            try {
                const response = await axios.get("http://localhost:3000/admin/trains");
                setTrains(response.data);
            } catch (error) {
                console.error("Error fetching trains:", error);
                // Handle the error here (e.g., show an error message)
            }
        }

        fetchTrains();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {/* Add any loading indicator here if needed */}
            {trains.map(train => {
                return <Train key={train.id} train={train} />;
            })}
        </div>
    );
}

function Train(props) {
    return (
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            paddingTop: 10,
            background:"#BEADFA"
        }}>
            <Typography textAlign="center" variant="h5">{props.train.name}</Typography>
            <Typography  textAlign="center" variant="h6">{props.train.source} to {props.train.destination}</Typography>
            <Typography  textAlign="center" variant="h6">Dest. Time: {props.train.depTime}</Typography>
            <Typography  textAlign="center" variant="h6">Arrival Time: {props.train.arrivalTime}</Typography>
            <Typography  textAlign="center" variant="h6">Travel Time: {props.train.time}</Typography>
            {/* Add more details as needed */}
        </Card>
    );
}

export default GTrains;
