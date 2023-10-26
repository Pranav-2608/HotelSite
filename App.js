import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'
import { Route,Routes} from 'react-router-dom';

const App = () => {
  return (
     <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/room/:id' element={<RoomDetails/>}/>
        </Routes>
        <Footer/>
     </div>
  )
};

export default App;
