import { DataProvider } from "./context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Links from "./components/Links";
import ShowTestDetail from "./components/ShowTestDetail";

function App() {
  return (
    <DataProvider>
      <div>
        <h1>Greydive Challenge</h1>
        <a href="https://portafolio-fedeferrelli.vercel.app/" target="_blank">
          Fede Mazza
        </a>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/:testerNumberURL" element={<ShowTestDetail />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
