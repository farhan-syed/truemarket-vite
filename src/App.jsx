import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound'
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
