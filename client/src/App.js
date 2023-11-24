import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import TopicCard from "./components/TopicCard";

function App() {
  return (
    <div>
      <div className="curvy-slant-rectangle-bg bg-cyan-950 -z-10 absolute" />
      <TopBar />
      <HeroSection />
      <div className="grid grid-cols-3 gap-8 px-40 mt-12">
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
