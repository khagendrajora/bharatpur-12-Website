import { HashRouter, Route, Routes } from "react-router-dom";
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
// import { Dashboard } from "./Pages/Profile/Dashboard";
import { WorkDonePage } from "./Pages/WorkDonePage";
import { PublicationPage } from "./Pages/PublicationPage";
import { BudgetPage } from "./Pages/BudgetPage";
import { ComplainPage } from "./Pages/ComplainPage";
import { TaxPage } from "./Pages/TaxPage";
import { NagrikPage } from "./Pages/NagrikPage";
import { NewsDetailPage } from "./Pages/NewsDetailPage";
import { WorkDetailPage } from "./Pages/WorkDetailPage";
import { PublicationDetailPage } from "./Pages/PublicationDetailPage";
import { NoticeDetailPage } from "./Pages/NoticeDetailPage";
import { Dashboard } from "./AdminDashboard/Dashboard";
import { AdminLogin } from "./AdminDashboard/Pages/AdminLogin";
import { Layout } from "./AdminDashboard/Layout/Layout";
import { DashboardImage } from "./AdminDashboard/Components/DashboardImage/DashboardImage";
import { Intro } from "./AdminDashboard/Components/Introduction/Intro";
import { Works } from "./AdminDashboard/Components/Works/Works";
import { Notice } from "./AdminDashboard/Components/Notice/Notice";
import { Publication } from "./AdminDashboard/Components/Publication/Publication";
import { News } from "./AdminDashboard/Components/News/News";
import { Employes } from "./AdminDashboard/Components/Employes/Employes";
import { AddHero } from "./AdminDashboard/Components/DashboardImage/AddHero";
import { AddIntro } from "./AdminDashboard/Components/Introduction/AddIntro";
import { AddWork } from "./AdminDashboard/Components/Works/AddWork";
import { AddNews } from "./AdminDashboard/Components/News/AddNews";
import { AddNotice } from "./AdminDashboard/Components/Notice/AddNotice";
import { AddEmploye } from "./AdminDashboard/Components/Employes/AddEmploye";
import { AddPublication } from "./AdminDashboard/Components/Publication/AddPublication";
import { BoardMembers } from "./AdminDashboard/Components/Employes/BoardMembers";
import { AddBod } from "./AdminDashboard/Components/Employes/AddBod";
import { UpdateIntro } from "./AdminDashboard/Components/Introduction/UpdateIntro";
import { UpdatePublication } from "./AdminDashboard/Components/Publication/UpdatePublication";
import { UpdateNotice } from "./AdminDashboard/Components/Notice/UpdateNotice";
import { UpdateWork } from "./AdminDashboard/Components/Works/UpdateWork";
import { UpdateNews } from "./AdminDashboard/Components/News/UpdateNews";
import { UpdateEmploy } from "./AdminDashboard/Components/Employes/UpdateEmploy";
import { UpdateBod } from "./AdminDashboard/Components/Employes/UpdateBod";
import { DashboardData } from "./AdminDashboard/Components/DashboardData";
import { useEffect } from "react";
import { PrivateRoute } from "./Validation/PrivateRoute";

function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`/#${window.location.pathname}`);
    }
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="" element={<PAgeLayout />}>
            <Route index element={<LandingPage />} />

            <Route path="aboutus" element={<AboutUs />} />
            <Route path="wardintro" element={<WardIntro />} />
            <Route path="toleintro" element={<ToleIntro />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="budget" element={<BudgetPage />} />
            <Route path="complain" element={<ComplainPage />} />
            <Route path="taxpage" element={<TaxPage />} />
            <Route path="nagrikpatra" element={<NagrikPage />} />
            <Route path="publication" element={<PublicationPage />} />
            <Route path="videos" element={<GallaryPage />} />
            <Route path="workdone" element={<WorkDonePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/newsdetail/:key" element={<NewsDetailPage />} />
            <Route path="workdetail/:key" element={<WorkDetailPage />} />
            <Route
              path="publicationdetail/:key"
              element={<PublicationDetailPage />}
            />
            <Route path="noticedetail/:key" element={<NoticeDetailPage />} />
          </Route>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboarddata" element={<DashboardData />} />
              <Route path="dashboardImage" element={<DashboardImage />} />
              <Route path="intro" element={<Intro />} />
              <Route path="works" element={<Works />} />
              <Route path="notice" element={<Notice />} />
              <Route path="publication" element={<Publication />} />
              <Route path="news" element={<News />} />
              <Route path="employes" element={<Employes />} />
              <Route path="boardmembers" element={<BoardMembers />} />
              <Route path="addhero" element={<AddHero />} />
              <Route path="addintro" element={<AddIntro />} />
              <Route path="addwork" element={<AddWork />} />
              <Route path="addnews" element={<AddNews />} />
              <Route path="addnotice" element={<AddNotice />} />
              <Route path="addemploye" element={<AddEmploye />} />
              <Route path="addpublication" element={<AddPublication />} />
              <Route path="addboardmember" element={<AddBod />} />

              {/* getByID */}

              {/* update */}
              <Route path="updateintro/:id" element={<UpdateIntro />} />
              <Route
                path="updatepublication/:id"
                element={<UpdatePublication />}
              />
              <Route path="updatenotice/:id" element={<UpdateNotice />} />
              <Route path="updatework/:id" element={<UpdateWork />} />
              <Route path="updatenews/:id" element={<UpdateNews />} />
              <Route path="updateemploye/:id" element={<UpdateEmploy />} />
              <Route path="updatebod/:id" element={<UpdateBod />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
