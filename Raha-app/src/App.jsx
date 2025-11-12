
import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
