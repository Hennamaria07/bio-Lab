import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import Home from "./pages/Home"
import People from "./pages/People"
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";
import ResearchPage from "./pages/ResearchPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/research" element={<ResearchPage />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
