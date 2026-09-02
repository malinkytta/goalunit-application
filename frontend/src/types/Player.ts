export type Player = {
  playerId: number;
  playerName: string;
  clubName: string;
  fairPriceM: number;
  fairPricePrevM: number | null;
  yearsLeftOnContract: number;
  contractExpiration: string | null;
  playerImageUrl: string;
  foot: string | null;
  dateOfBirth: string | null;
  birthPlaceAreaName: string | null;
  height: number | null;
  weight: number | null;
  passportAreaName: string | null;
};