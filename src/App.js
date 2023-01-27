import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router';
import Home from './components/home/Home.js';
import Services from './components/services/Services';
import Profile from './components/Profile/Profiles';
import Navbar from './components/NavBar/Navbar';
import Marketing from './components/services/Marketing';
import Dev from './components/services/Dev';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}>

            <Route path='/services/dev' element={<Dev/>}/>
            <Route path='/services/marketing' element={<Marketing/>}/>

          </Route>
          <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
