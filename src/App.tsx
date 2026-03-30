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
import { SmartSheet } from "./pages/SmartSheet";
import { Contactos } from "./pages/Contactos";
import { ModeloIDEF0 } from "./pages/ModeloIDEF0";
import { BPMN } from "./pages/BPMN";
import { CasoUso } from "./pages/CasoUso";

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
            <Route path="/smartsheet" element={<SmartSheet />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/modelo-idef0" element={<ModeloIDEF0 />} />
            <Route path="/bpmn" element={<BPMN />} />
            <Route path="/caso-uso" element={<CasoUso />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};