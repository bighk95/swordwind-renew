import './App.css';
import React from 'react';
import Layout from './Layout';
import ScaleProvider from './context/ScaleContext';

function App() {
  return (
    <ScaleProvider>
      <Layout />
    </ScaleProvider>
  );
}

export default App;
