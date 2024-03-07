// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import YourDetailPage from './components/yourweather';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:city" element={<Detail />} />
          <Route path="/latlonjud" element={< YourDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
