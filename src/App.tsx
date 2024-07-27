import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.layout, { children: React.createElement(route.component) })}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
