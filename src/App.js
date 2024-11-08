import './App.css';  // Import the main styles for the app
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './Component/Navbar';  // Import the Navbar component
import HeroSection from './Component/Home';  
import ComingSoon from './Component/ComingSoon';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ComingSoon />
    </div>
  );
}

export default App;
