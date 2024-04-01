import './App.css';
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from './layout/Navbar';
import Graph from './components/Graph';
import { Context } from './context/Providers';
import { useContext } from 'react';
import Prices from './components/Prices';

function App() {
  const { page }  = useContext(Context)
  
  return (
    <div className="App p-5">
      <Navbar />
      { page == "graph" && <Graph />}
      { page == "prices" && <Prices />}
    </div>
  );
}

export default App;
