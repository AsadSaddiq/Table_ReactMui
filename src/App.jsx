import React from "react";
import SimpleTable from "./pages/SimpleTable";
import MinimalTable from "./pages/MinimalTable";
import { Route, Routes } from "react-router-dom";
import TableDesign from "./pages/Table";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SimpleTable />} />
        <Route path="/1" element={<TableDesign />} />
        <Route path="/2" element={<MinimalTable />} />
      </Routes>
    </div>
  );
};

export default App;
