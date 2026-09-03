import type { Player } from "../types/Player";

const formatPosition = (position: string | null | undefined): string => {
  if (!position) return "Position unknown";
  return position
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

type PlayerCardProps = {
  player: Player;
  position?: string | null;
  onClick: () => void;
};

const PlayerCard = ({ player, position, onClick }: PlayerCardProps) => {
  return (
    <div className="player-card" onClick={onClick}>
      {player.playerImageUrl && (
        <img
          src={player.playerImageUrl}
          alt={player.playerName}
          className="player-card__image"
        />
      )}
      <div className="player-card__info">
        <h3 className="player-card__name">{player.playerName}</h3>
        <p className="player-card__position">{formatPosition(position)}</p>
      </div>
      <span className="player-card__chevron">›</span>
    </div>
  );
};

export default PlayerCard;
