import { DataProvider } from "./context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Links from "./components/Links";
import ShowTestDetail from "./components/showTestDetail/ShowTestDetail";

function App() {
  return (
    <DataProvider>
      <div className="bg-main text-secondary font-sans w-full min-h-screen px-4">
        <div className="h-10 sm:h-20 text-lg font-semibold shadow-lg flex flex-row justify-between items-center">
          <h1>Greydive Challenge</h1>
          <a className="cursor-pointer hover:text-secondary/80 duration-300" href="https://portafolio-fedeferrelli.vercel.app/" target="_blank">
            Fede Mazza
          </a>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Links />} />
            <Route path="/:testerNumberURL" element={<ShowTestDetail />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
