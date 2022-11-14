import  { useState } from 'react';
import {BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import Avia from './components/avia/Avia';
import AviaInfo from './components/aviaInfo/AviaInfo';
import './App.css';

function App() {
  const [findInfo, setFindInfo] = useState({
    from: '',
    start: '',
    to: '',
    finish: ''
  })

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/avia' element={<Avia setFindInfo={setFindInfo} />}/>
        <Route path='/avia/info' element={<AviaInfo findInfo={findInfo}  />}/>
        <Route path='/'  element={<Navigate to="/avia" replace />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
