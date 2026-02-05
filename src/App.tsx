import "./App.css";
import Properties from "./pages/properties/Properties";
import RegisterPropeties from "./pages/registerpropeties/RegisterPropeties";
import "./pages/registerpropeties/styleRegisterP.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Promotion from "./pages/Promotion/Promotion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="registerpropeties" element={<RegisterPropeties />} />
          <Route path="Promotion" element={<Promotion />} />
        </Route>
      </Routes>    </>
  );
}

export default App;