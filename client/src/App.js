import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import TopicCard from "./components/TopicCard";
import axios from "axios";

function App() {

  const [allTopics, setAllTopics] = useState([])
console.log(allTopics);
  useEffect(() => {
    axios.get("http://localhost:1337/api/topics?populate=*")
        .then(({ data }) => setAllTopics(data.data))
        .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="curvy-slant-rectangle-bg bg-cyan-950 -z-10 absolute" />
      <TopBar />
      <HeroSection />
      <div className="flex flex-wrap justify-between gap-8 px-40 mt-12">
        {
          allTopics.map(topic => (
            <TopicCard key={topic.id} data={topic}/>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
