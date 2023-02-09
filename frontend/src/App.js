import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header/>
      <Movies/>
       <Outlet/>
    </div>
  );
}

export default App;
