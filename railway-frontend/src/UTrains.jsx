// import React, { useState } from 'react';

// const UTrains = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [trainDetails, setTrainDetails] = useState(null);

// //   const handleSearch = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:3000/user/trains?source=${source}&destination=${destination}`);
// //       const data = await response.json();
// //       setTrainDetails(data);
// //     } catch (error) {
// //       console.error('Error fetching train details:', error);
// //     }
// //   };

//   return (
//     <div>
//       <h1>UTrains - Search Trains</h1>
//       <label htmlFor="source" >Source: </label>
//       <input type="text" id="source" value={source} onChange={(e) => setSource(e.target.value)} />
//       <label htmlFor="destination">Destination: </label>
//       <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//       <button onClick={() => {
//               function callback2(data) {
//                 // alert("Train Added");
//                 setTrainDetails(data);
//               }
//               function callback1(res) {
//                 res.json().then(callback2);
//               }
//               console.log("here");
//               fetch("http://localhost:3000/user/trains", {
//                 method: "GET",
//                 body: JSON.stringify({
//                 //   name: name,
//                   source: source,
//                   destination: destination,
//                 //   arrivalTime: arrivalTime,
//                 //   depTime: depTime,
//                 //   time: time,
//                 }),
//                 headers: {
//                   "content-type": "application/json",
//                 //   Authorization: "Bearer " + localStorage.getItem("token"),
//                 },
//               }).then(callback1);
//             }}>Search</button>
//       <div>
//         {trainDetails ? (
//           <div>
//             <p>Train Name: {trainDetails.name}</p>
//             <p>Source: {trainDetails.source}</p>
//             <p>Destination: {trainDetails.destination}</p>
//             <p>Departure Time: {trainDetails.depTime}</p>
//             {/* Add more train details here as needed */}
//           </div>
//         ) : (
//           <p>No train found with the given source and destination.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UTrains;
////////////////////////////////////////////////////////////





import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const UTrains = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trainDetails, setTrainDetails] = useState(null);

  // const handleSearch = () => {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     console.error('No JWT token found in local storage.');
  //     return;
  //   }

  //   fetch(`http://localhost:3000/user/trains?source=${source}&destination=${destination}`, {
  //     method: 'POST', // Change the HTTP method to POST
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTrainDetails(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching train details:', error);
  //     });
  // };

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          paddingBottom: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5">UTrains - Search Trains</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA" }}>
          <TextField
            fullWidth={true}
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            label="Source"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            label="Destination"
            variant="outlined"
          />
          <br />
          <br />
          <Button
          variant='contained'
          style={{background:"#E2F6CA", color:"black"}}
          onClick={() => {
        function callback2(data) {
                setTrainDetails(data);
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              console.log("here");
              fetch("http://localhost:3000/user/trains", {
                method: "POST",
                body: JSON.stringify({
                  // name: name,
                  source: source,
                  destination: destination,
                  // arrivalTime: arrivalTime,
                  // depTime: depTime,
                  // time: time,
                }),
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then(callback1);
            }}>Search</Button>
        </Card>
      </div>
      <div>
        {trainDetails ? (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Card variant="outlined" style={{ width: 400, padding: 20, background:"#BEADFA" }}>
            <Typography variant="h6">Train Details</Typography>
            <Typography variant="body1">Train Name: {trainDetails.name}</Typography>
            <Typography variant="body1">Source: {trainDetails.source}</Typography>
            <Typography variant="body1">Destination: {trainDetails.destination}</Typography>
            <Typography variant="body1">Arrival Time: {trainDetails.arrivalTime}</Typography>
            <Typography variant="body1">Dest. Time: {trainDetails.depTime}</Typography>
            <Button variant='contained'> Book Ticket</Button>
            {/* Add more train details here as needed */}
          </Card>
          </div>
        ) : (
          <Typography variant="body1" style={{ textAlign: 'center', marginTop: 20 }}>
            No train found with the given source and destination.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UTrains;