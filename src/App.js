import "./App.css";
import NavBar from "./components/Navbar";
import { WelcomeSection } from "./components/WelcomeSection";
import ProjectsSection from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <WelcomeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
