import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./components/AnimatedRoute/AnimatedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
