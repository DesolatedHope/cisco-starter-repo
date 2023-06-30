import Cards from './Cards.js';
import './App.css';
import Banner from './Banner.js';
import IPGrab from './IPGrab.js';

function App() {
    return (
    <div>
      <Banner text = "Sextant"/>
      <IPGrab text = "IPv4"/>
      <IPGrab text = "IPv6" />
    </div>
  );
}

export default App;
