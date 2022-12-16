import './App.css';
import LandingPage from './page/LandingPage';
import HomePage from './page/HomePage';
import MenuPage from './page/MenuPage'; 
import ReportsPage from './page/ReportsPage'; 

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <HomePage/>
      <MenuPage/>
      <ReportsPage/>
    </div>
  );
}

export default App;
