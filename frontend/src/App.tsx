import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { PAgeLayout } from "./Layout/PageLayout";
import { LandingPage } from "./Pages/LandingPage";
import { AboutUs } from "./Pages/AboutUs";
import { WardIntro } from "./Pages/WardIntro";
import { ToleIntro } from "./Pages/ToleIntro";
import { NewsPage } from "./Pages/NewsPage";
import { NoticesPage } from "./Pages/NoticesPage";
// import { PhotoesPage } from "./Pages/PhotoesPage";
import { GallaryPage } from "./Pages/GallaryPage";
import { ContactPage } from "./Pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PAgeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="wardintro" element={<WardIntro />} />
            <Route path="toleintro" element={<ToleIntro />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            {/* <Route path="photoes" element={<PhotoesPage />} /> */}
            <Route path="videos" element={<GallaryPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
