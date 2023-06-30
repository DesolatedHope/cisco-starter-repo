import { useState } from "react";
import Cards from "./Cards";

const websocket = new WebSocket("ws://localhost:55455");

function LatencyCheck(){
    const [time, setTime] = useState(0);
    websocket.onmessage = (event) => {
        setTime(Date.now() - event.data);
    }
    return ( 
        <Cards text = { "Latency: " + time }></Cards>
     );
}
 
export default LatencyCheck;