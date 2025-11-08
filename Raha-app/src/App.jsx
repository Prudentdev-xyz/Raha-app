
import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    // <BrowserRouter>
    //      <Routes>
    //       <Route element={<} >

    //       </Route>
    //      </Routes>
    // </BrowserRouter>
    <div className="font-inter">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
