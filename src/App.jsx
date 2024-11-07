import React, { useContext } from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
}

export default App;