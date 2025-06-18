import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./apna/nav";
import Second from "./apna/Second";
import Babar from './apna/Babar';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/babar" element={<Babar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
