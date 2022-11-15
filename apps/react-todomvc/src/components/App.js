import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { Routes, Route } from 'react-router-dom';
import EmptyPage from '../app/empty-page/empty-page';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="not-found" element={<EmptyPage />} />
    </Routes>
  </div>
);

export default App;
