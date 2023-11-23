import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import TopicCard from "./components/TopicCard";

function App() {
  return (
    <div>
      <div className="curvy-slant-rectangle-bg -z-10" />
      <TopBar />
      <HeroSection />
      <div className="grid grid-cols-3 gap-8 px-40 mt-12">
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </div>
    </div>
  );
}

export default App;
