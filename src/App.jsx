import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

function EpisodeList({ episodes, onSelect }) {
  return (
    <ul className="episode-list">
      {episodes.map(episode => (
        <li key={episode.id} onClick={() => onSelect(episode)}>
          {episode.title}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return <p className="select-message">Please select an episode</p>;
  }

  return (
    <div className="episode-details">
      <h3>Episode {episode.id}</h3>
      <h4>{episode.title}</h4>
      <p>{episode.description}</p>
    </div>
  );
}

export default function App() {
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1>Dark Echoes</h1>
      
      <div className="content">
        <div className="episodes-section">
          <h2>Episodes</h2>
          <EpisodeList episodes={episodes} onSelect={setSelectedEpisode} />
        </div>

        <div className="details-section">
          <h2>Episode Details</h2>
          <EpisodeDetails episode={selectedEpisode} />
        </div>
      </div>
    </div>
  );
}
