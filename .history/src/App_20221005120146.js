import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from  './components/Home/Home'
import Rent from './components/Rent/Rent';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rent' element={<Rent/>}/>
    </Routes>
    </>
  );
}

export default App;
