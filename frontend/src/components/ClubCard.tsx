import type { Club } from "../types/Club";

type ClubCardProps = {
  club: Club;
  onClick: () => void;
};

const ClubCard = ({ club, onClick }: ClubCardProps) => {
  return (
    <div className="club-card" onClick={onClick}>
      <img
        src={club.clubimageurl}
        alt={club.clubName}
        className="club-card__logo"
      />
      <div className="club-card__info">
        <h3 className="club-card__name">{club.clubName}</h3>
        <p className="club-card__stats">{club.numPlayers} players</p>
      </div>
      <span className="club-card__chevron">›</span>
    </div>
  );
};

export default ClubCard;
