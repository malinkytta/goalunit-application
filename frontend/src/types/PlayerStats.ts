export type PlayerStats = {
  playerId: number;
  playerPosition: string | null;
  goalsCurrent: number;
  goalsPrev: number | null;
  assistsCurrent: number;
  assistsPrev: number | null;
  xgCurrent: number;
  xgPrev: number | null;
};