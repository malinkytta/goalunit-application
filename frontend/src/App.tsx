import { useState } from "react";
import ClubCard from "./components/ClubCard";
import Sidebar from "./components/Sidebar";
import StatsBar from "./components/StatsBar";
import playersData from "./data/all_players_data.json";
import clubsData from "./data/club_summary_data.json";
import type { Club } from "./types/Club";
import ClubHeader from "./components/ClubHeader";

const App = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const clubs = clubsData as Club[];

  const handleGoHome = () => {
    setSelectedClub(null);
  };

  if (selectedClub) {
    return (
      <div className="layout">
        <Sidebar onGoHome={handleGoHome} />
        <main className="layout__main">
          <button className="app__back" onClick={handleGoHome}>
            ← All clubs
          </button>
          <ClubHeader club={selectedClub} />
        </main>
      </div>
    );
  }

  return (
    <div className="layout">
      <Sidebar onGoHome={handleGoHome} />
      <main className="layout__main">
        <StatsBar
          title="Premier League Clubs"
          subtitle="Squad values and contract insights for all 20 Premier League clubs."
          stats={[
            { label: "Clubs", value: clubsData.length },
            { label: "Players", value: playersData.length },
            { label: "Season", value: "2024/25" },
          ]}
        />
        <div className="app__grid">
          {clubs.map((club) => (
            <ClubCard
              key={club.clubId}
              club={club}
              onClick={() => setSelectedClub(club)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
