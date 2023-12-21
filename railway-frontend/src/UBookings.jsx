import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function UBookings(){
    return <div >
        <Typography variant="h6"><b>My Bookings</b></Typography>
    <div style={{ display: "flex", justifyContent: "center" }}>
        
        <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA" }}>
            <Typography variant="h6">Shanti exp</Typography>
            <Typography variant="body1">SRC: BZA</Typography>
            <Typography variant="body1"> DEST: NDLS</Typography>
            <Typography variant="body1">ARR: 9:00</Typography>
        </Card>
    </div>
    </div>
}

export default UBookings;