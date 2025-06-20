import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./apna/nav";
import Second from "./apna/Second";
import Babar from './apna/Babar';
import Third from './apna/Third';
import Shaheen from './apna/Shaheen';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Second />
              <Third />
            </>
          }
        />

        <Route path="/babar" element={<Babar />} />
         <Route path="/shaheen" element={<Shaheen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
