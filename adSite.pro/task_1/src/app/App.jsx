import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SECTION_ID } from "../config/constants/section_id";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { sections } from "./sections/sections";
import { CarsContext } from "../context/cars_context/cars_context";

function App() {
  return (
    <CarsContext>
      <main className="m-0 p-0 bg-background-primary w-full">
        <Router basename="/">
          <Header sectionId={SECTION_ID} />
          <Routes>
            <Route path="*" element={sections} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </CarsContext>
  );
}

export default App;
