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
import CreateCV from "./components/Pages/CreateCV";

function Layout({ children }) {
  const location = useLocation();

  // Hide Header & Footer on /create-cv page
  const hideHeaderFooter = location.pathname === "/create-cv";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  // bg color #fafbfd
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-cv" element={<CreateCV />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
