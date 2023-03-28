import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import JobOfferer from "../../pages/JobOfferer/JobOfferer";
import Administrator from "../../pages/Administrator/Administrator";
import About from "../../pages/About/About";
import { AnimatePresence } from "framer-motion";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/jobofferer" element={<JobOfferer />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
