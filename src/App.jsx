import React from "react";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Display from "./pages/Display";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/display" element={<Display />} />
          <Route path="/update" element={<Update />} />

          {/* <Update /> */}
          {/* <Display /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
