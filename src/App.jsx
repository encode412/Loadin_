import { useState } from "react";
import { BecomeADriver, Homepage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/driver" element={<BecomeADriver />} />
    </Routes>
  );
}

export default App;
