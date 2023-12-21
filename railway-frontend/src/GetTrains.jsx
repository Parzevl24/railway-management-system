import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

function getTrains(){
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        function callback2(data){
            setTrains(data.trains);
        }

        function callback1(res){
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/trains", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("tooken")
            }
        }).then(callback1)
    }, []);
    return <div style={{
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }}>
        get trains here
        {trains.map(course=>{
            return <Train train = {train}/>
        })}
    </div>
}

function Train(props){
    return <Card style={{
        margin:10,
        width:300,
        meinHeight: 200
    }}>
        <Typography textAlign={"center"} variant="h5">{props.train.source}</Typography>
    </Card>
}

export default getTrains();