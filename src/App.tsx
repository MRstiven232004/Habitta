import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import RegisterPropeties from "./pages/registerpropeties/RegisterPropeties";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route path="/src/pages/home/Home.tsx" element={<Home></Home>} />
          <Route path="/src/pages/properties/Properties.tsx" element={<Properties></Properties>} />
          <Route
            path="RegisterPropeties"
            element={<RegisterPropeties></RegisterPropeties>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
