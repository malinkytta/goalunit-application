import type { Player } from "../types/Player";
import type { PlayerStats } from "../types/PlayerStats";
import { formatPosition } from "../utils/formatPlayer";

type PlayerDetailProps = {
  player: Player;
  stats?: PlayerStats;
  onBack: () => void;
};

const PlayerDetail = ({ player, stats, onBack }: PlayerDetailProps) => {
  return (
    <div className="player-detail">
      <button className="app__back" onClick={onBack}>
        ← Back
      </button>

      <div className="player-detail__banner">
        <div className="player-detail__identity">
          {player.playerImageUrl && (
            <img
              src={player.playerImageUrl}
              alt={player.playerName}
              className="player-detail__image"
            />
          )}
          <div>
            <h1 className="player-detail__name">{player.playerName}</h1>
            <p className="player-detail__position">
              {formatPosition(stats?.playerPosition)}
            </p>
          </div>
        </div>

        <div className="player-detail__banner-meta">
          <div className="player-detail__banner-stat">
            <span className="player-detail__fact-label">Current club</span>
            <span className="player-detail__banner-value">
              {player.clubName}
            </span>
          </div>
          <div className="player-detail__banner-stat">
            <span className="player-detail__fact-label">Contract until</span>
            <span className="player-detail__banner-value">
              {player.contractExpiration ?? "N/A"}
            </span>
          </div>
        </div>

        <div className="player-detail__hero-value">
          <span className="player-detail__fact-label">Estimated value</span>
          <span className="player-detail__hero-number">
            €{player.fairPriceM}
            <small> M</small>
          </span>
        </div>
      </div>
    </div>
  );
};
export default PlayerDetail;
