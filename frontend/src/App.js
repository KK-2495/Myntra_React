import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home /> } />
      <Route exact path='/register' element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
