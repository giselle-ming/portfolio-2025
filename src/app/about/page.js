import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#d4dbfa]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
