import React from "react";
import {
  createBrowserRouter,
  Route,
  Routes,
  Navigate,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";


import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import DemoReview from "views/index-sections/DemoReview";
import CompanyIndex from "views/index-sections/Dashboard/CompanyIndex";
import CompanyLeadership from "components/Navbars/DropdownLinks/CompanyLeadership/Index";
import Ethics from "components/Navbars/DropdownLinks/Ethics/Index";
import Careers from "components/Navbars/DropdownLinks/Careers/Index";
import Contact from "components/Navbars/DropdownLinks/Contact/Index";
import Partners from "components/Navbars/DropdownLinks/Partners/Index";
import Press from "components/Navbars/DropdownLinks/Press/Index";




const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
         <Route path="" element={<Index />} />
                <Route path="nucleo-icons" element={<NucleoIcons />} />
                <Route path="landing-page" element={<LandingPage />} />
                <Route path="profile-page" element={<ProfilePage />} />
                <Route path="login-page" element={<LoginPage />} />
                <Route path="review-demo" element={<DemoReview />} />
                <Route path="company" element={<CompanyIndex />} />
                <Route path="company/leadership" element={<CompanyLeadership />} />
                <Route path="ethics" element={<Ethics />} />
                <Route path="press" element={<Press />} />
                <Route path="contact" element={<Contact />} />
                <Route path="partners" element={<Partners />} />
                <Route path="careers" element={<Careers />} />



                
                <Route path="*" element={<Navigate to="/" replace />} />

      {/* Redirect the root path to /admin/dashboard */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
