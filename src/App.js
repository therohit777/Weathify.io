import './App.css';
import { Weather } from './components/Js/Weather';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import { Logo } from './components/Js/Logo';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/weather" element={<Weather/>} />
          <Route path="/" element={<Logo/>} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
