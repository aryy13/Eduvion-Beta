import { useState } from 'react'
import { BrowserRouter as Router,  Routes, Route, } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Bimbingan from './pages/Bimbingan';
import Kalender from './pages/kalender';
import Profil from './pages/Profil';
import Repository from './pages/Repository';
import Chat from './pages/Chat';
import Signin from './pages/Signin';




function App() {
  return (
   <>
      <Router>
      <Routes>
        <Route path='/' element={<Beranda />}/> 
        <Route path='/signin' element= {<Signin/>}/>
        <Route path='/Bimbingan' element= {< Bimbingan />}/>
        <Route path='/Kalender' element= {< Kalender />}/>
        <Route path='/chat' element= {<Chat  />}/>
        <Route path='/profil' element= {<Profil  />}/>
        <Route path='/repository' element= {<Repository  />}/>
      </Routes>
      </Router>

    </>
  ); 
};

export default App;
