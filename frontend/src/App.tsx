import ClubCard from "./components/ClubCard";
import Sidebar from "./components/Sidebar";
import StatsBar from "./components/StatsBar";
import playersData from "./data/all_players_data.json";
import clubsData from "./data/club_summary_data.json";
import type { Club } from "./types/Club";

const App = () => {
  const clubs = clubsData as Club[];

  return (
    <div className="layout">
      <Sidebar onGoHome={() => {}} />
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
            <ClubCard key={club.clubId} club={club} onClick={() => {}} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
