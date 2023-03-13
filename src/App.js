import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components/Dashboard';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
