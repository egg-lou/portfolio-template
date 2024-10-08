import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import PortfolioPage from "@/pages/portfolio";
import ProjectsPage from "@/pages/projects";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PortfolioPage />} path="/portfolio" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
