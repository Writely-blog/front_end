import { useState } from 'react';
import './App.css';
import TheContextProvider from './TheContext';

function App() {
  return (
    <TheContextProvider>
      <div className='App'></div>
    </TheContextProvider>
  );
}

export default App;
