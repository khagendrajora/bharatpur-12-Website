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
import { Dashboard } from "./Pages/Profile/Dashboard";
import { WorkDonePage } from "./Pages/WorkDonePage";
import { PublicationPage } from "./Pages/PublicationPage";
import { BudgetPage } from "./Pages/BudgetPage";
import { ComplainPage } from "./Pages/ComplainPage";
import { TaxPage } from "./Pages/TaxPage";
import { NagrikPage } from "./Pages/NagrikPage";

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
            <Route path="budget" element={<BudgetPage />} />
            <Route path="complain" element={<ComplainPage />} />
            <Route path="taxpage" element={<TaxPage />} />
            <Route path="nagrikpatra" element={<NagrikPage />} />
            <Route path="publication" element={<PublicationPage />} />
            <Route path="videos" element={<GallaryPage />} />
            <Route path="workdone" element={<WorkDonePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
