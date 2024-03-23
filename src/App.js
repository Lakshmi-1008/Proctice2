import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';
import Register from './Components/Register';
 import Enroll from './Components/Enroll';

function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
       <Route path='/loginpage' element={<Loginpage/>} />
       <Route path='/landingpage' element={<Landingpage/>}/>
       <Route path='/signuppage' element={< Signuppage/>}/> 
       <Route path='/register' element={<Register/>}/>
       <Route path='/enroll' element={<Enroll/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
