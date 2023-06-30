import './App.css';
import Banner from './Banner.js';
import IPGrab from './IPGrab.js';
import LatencyCheck from './LatencyChecker.js';

function App() {
    return (
    <div>
      <Banner text = "Sextant"/>
      <IPGrab text = "IPv4"/>
      <IPGrab text = "IPv6" />
      <LatencyCheck />
    </div>
  );
}

export default App;
