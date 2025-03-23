import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#d4dbfa]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsPage />
      </div>
    </main>
  );
}
