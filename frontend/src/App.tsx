import { useState } from "react";

import clubsData from "./data/club_summary_data.json";
import playersData from "./data/all_players_data.json";
import playerStatsData from "./data/player_stats_data.json";

import ClubCard from "./components/ClubCard";
import ClubHeader from "./components/ClubHeader";
import PlayerCard from "./components/PlayerCard";
import Sidebar from "./components/Sidebar";
import StatsBar from "./components/StatsBar";

import type { Club } from "./types/Club";
import type { Player } from "./types/Player";
import type { PlayerStats } from "./types/PlayerStats";
import PlayerDetail from "./components/PlayerDetail";

const App = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const clubs = clubsData as Club[];
  const players = playersData as Player[];
  const playerStats = playerStatsData as PlayerStats[];

  const handleGoHome = () => {
    setSelectedClub(null);
  };

  if (selectedPlayer) {
    const player = players.find(
      (player) => player.playerId === selectedPlayer.playerId,
    );
    const stats = playerStats.find(
      (stats) => stats.playerId === selectedPlayer.playerId,
    );
    if (!player) return null;

    return (
      <div className="layout">
        <Sidebar onGoHome={handleGoHome} />
        <main className="layout__main">
          <PlayerDetail
            player={player}
            stats={stats}
            onBack={() => setSelectedPlayer(null)}
          />
        </main>
      </div>
    );
  }

  if (selectedClub) {
    const clubPlayers = players.filter(
      (player) => player.clubName === selectedClub.clubName,
    );

    return (
      <div className="layout">
        <Sidebar onGoHome={handleGoHome} />
        <main className="layout__main">
          <button className="app__back" onClick={handleGoHome}>
            ← All clubs
          </button>
          <ClubHeader club={selectedClub} />
          <div className="app__grid">
            {clubPlayers.map((player) => {
              const stats = playerStats.find(
                (stats) => stats.playerId === player.playerId,
              );
              return (
                <PlayerCard
                  key={player.playerId}
                  player={player}
                  position={stats?.playerPosition}
                  onClick={() => setSelectedPlayer(player)}
                />
              );
            })}
          </div>
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
