import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { Routes, Route } from 'react-router-dom';
import EmptyPage from '../app/empty-page/empty-page';
import WelcomePage from '../app/welcome-page/welcome-page';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="not-found" element={<EmptyPage />} />
      <Route path="welcome" element={<WelcomePage />} />
    </Routes>
  </div>
);

export default App;
