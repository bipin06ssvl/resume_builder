import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  // bg color #fafbfd
  return (
    <>
      <Router>
        <Header />
        {/* <main className="w-full px-0"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* </main> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
