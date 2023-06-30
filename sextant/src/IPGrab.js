import Cards from './Cards.js';

async function IPgrabber(){
    const res = await fetch("https://api.ipify.org/?format=json");
    const ans = await res.json();
    return ans.ip;
}

async function IPgrabber6(){
    const res = await fetch("https://api64.ipify.org/?format=json");
    const ans = await res.json();
    return ans.ip;
}

var ans = await IPgrabber();
const res = await IPgrabber6();

function IPGrab(props) {
    if(props.text === "IPv6"){
        ans = res;
    }
    const k = props.text;
    return ( 
        <Cards text = {k + ": " + ans} />
     );
}
 
export default IPGrab;
