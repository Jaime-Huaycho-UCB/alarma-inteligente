import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LaPregunta } from "./pages/LaPregunta";
import { ModeloPART } from "./pages/ModeloPART";
import { ModeloSMART } from "./pages/ModeloSMART";
import { DefinicionProblema } from "./pages/DefinicionProblema";
import { Ishikawa } from "./pages/Ishikawa";
import { LluviaIdeas } from "./pages/LluviaIdeas";
import { Objetivo } from "./pages/Objetivo";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-pregunta" element={<LaPregunta />} />
            <Route path="/smart" element={<ModeloSMART />} />
            <Route path="/modelo-part" element={<ModeloPART />} />
            <Route path="/definicion-problema" element={<DefinicionProblema />} />
            <Route path="/ishikawa" element={<Ishikawa />} />
            <Route path="/lluvia-ideas" element={<LluviaIdeas />} />
            <Route path="/objetivo" element={<Objetivo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};