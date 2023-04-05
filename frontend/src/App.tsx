import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Collection from "./pages/Collection";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/collection" element={<Collection />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
