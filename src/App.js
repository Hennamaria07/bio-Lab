import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import Home from "./pages/Home"
import People from "./pages/People"
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";
import ResearchPage from "./pages/ResearchPage";
import PublicationPage from "./pages/PublicationPage";
import './App.css';
import OpportunitiesPage from "./pages/OpportunitiesPage";
import Collaborators from "./pages/CollaboratorsPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/publications" element={<PublicationPage />} />
      <Route path="/opportunities" element={<OpportunitiesPage />} />
      <Route path="/collab" element={<Collaborators />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
