import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/properties" element={<Properties />} />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}