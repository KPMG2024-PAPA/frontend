import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Pages
import MainPage from './component/page/MainPage';
import SpecPage from './component/page/SpecPage';
import SimPage from './component/page/SimPage';
import ResearchPage from './component/page/ResearchPage';


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/spec-page" element={<SpecPage />} />
          <Route path="/sim-page" element={<SimPage />} />
          <Route path="/research-page" element={<ResearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  }

export default App;