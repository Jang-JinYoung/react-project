import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  MainPage,
  ChartPage
} from 'pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </>
  );
}

export default App;
