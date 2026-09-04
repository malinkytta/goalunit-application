import type { Player } from "../types/Player";
import type { PlayerStats } from "../types/PlayerStats";
import { calculateAge } from "../utils/calculateAge";
import { formatPosition } from "../utils/formatPlayer";

type PlayerDetailProps = {
  player: Player;
  stats?: PlayerStats;
  onBack: () => void;
};

const PlayerDetail = ({ player, stats, onBack }: PlayerDetailProps) => {
  const age = calculateAge(player.dateOfBirth);
  const valueChange =
    player.fairPricePrevM !== null
      ? Math.round((player.fairPriceM - player.fairPricePrevM) * 10) / 10
      : null;

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

      <div className="player-detail__panels">
        <div className="player-detail__panel">
          <span className="player-detail__panel-title">Market value</span>
          {player.fairPricePrevM !== null ? (
            <div className="player-detail__value-compare">
              <div className="player-detail__fact">
                <span className="player-detail__fact-label">Last season</span>
                <span className="player-detail__fact-value">
                  €{player.fairPricePrevM} M
                </span>
              </div>
              <div className="player-detail__fact">
                <span className="player-detail__fact-label">This season</span>
                <span className="player-detail__fact-value">
                  €{player.fairPriceM} M
                </span>
              </div>
              <div className="player-detail__fact">
                <span className="player-detail__fact-label">Change</span>
                <span
                  className={`player-detail__delta-badge ${
                    valueChange !== null && valueChange >= 0
                      ? "player-detail__delta-badge--up"
                      : "player-detail__delta-badge--down"
                  }`}
                >
                  {valueChange !== null && valueChange >= 0 ? "+€" : "-€"}
                  {valueChange !== null ? Math.abs(valueChange) : ""} M
                </span>
              </div>
            </div>
          ) : (
            <p className="player-detail__fact-label">
              No valuation from last season to compare with.
            </p>
          )}
        </div>

        <div className="player-detail__panel">
          <span className="player-detail__panel-title">Goals and assists</span>
          <div className="player-detail__facts">
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">
                Goals last season
              </span>
              <span className="player-detail__fact-value">
                {stats?.goalsPrev ?? "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">
                Goals this season
              </span>
              <span className="player-detail__fact-value">
                {stats?.goalsCurrent ?? "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">
                Assists this season
              </span>
              <span className="player-detail__fact-value">
                {stats?.assistsCurrent ?? "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">xG this season</span>
              <span className="player-detail__fact-value">
                {stats?.xgCurrent ?? "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="player-detail__panel">
          <span className="player-detail__panel-title">Facts</span>
          <div className="player-detail__facts">
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">
                {player.dateOfBirth ?? "N/A"}
              </span>
              <span className="player-detail__fact-value">
                {age !== null ? `${age} years` : "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">Foot</span>
              <span className="player-detail__fact-value">
                {player.foot ?? "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">Height</span>
              <span className="player-detail__fact-value">
                {player.height ? `${player.height} cm` : "N/A"}
              </span>
            </div>
            <div className="player-detail__fact">
              <span className="player-detail__fact-label">Country</span>
              <span className="player-detail__fact-value">
                {player.passportAreaName ?? "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
