import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { StyledMain } from './styles/layout.style';

const App: React.FC = () => (
  <StyledMain>
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <AppRouter />
    </Router>
  </StyledMain>
);

export default App;
