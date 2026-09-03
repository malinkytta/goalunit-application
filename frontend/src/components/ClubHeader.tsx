import type { Club } from "../types/Club";

const ClubHeader = ({ club }: { club: Club }) => {
  return (
    <div className="club-header">
      <div className="club-header__identity">
        <img
          src={club.clubimageurl}
          alt={club.clubName}
          className="club-header__logo"
        />
        <div>
          <h1 className="club-header__name">{club.clubName}</h1>
          <p className="club-header__subtitle">
            {club.numPlayers} players · Premier League 2024/25
          </p>
        </div>
      </div>
      <div className="club-header__stats">
        <div className="club-header__stat">
          <span className="club-header__stat-label">Squad value</span>
          <span className="club-header__stat-value">€{club.totalValueM} M</span>
        </div>
      </div>
    </div>
  );
};

export default ClubHeader;
