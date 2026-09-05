# Goalunit Premier League Explorer

En interaktiv plattform för att utforska Premier League 2024/25 - spelardata, klubbvärden och prestationer.

**Live demo:** https://goalunit-application.vercel.app/

_LIA-ansökan för Goalunit_

## Vad gör appen?

- Se alla klubbar i ligatabellen med ranking och poäng
- Klicka på en klubb för att se spelarnas marknadsvärden
- Klicka på en spelare för att se: värde, kontraktstid, stats (mål/assists), ålder, längd, nationalitet
- Se hur spelarnas värde förändrats från förra säsongen

## 📁 Projektstruktur

```
goalunit-application/
├── analysis/
│   └── data_pipeline.ipynb
├── data/
│   ├── clubs.csv
│   ├── events.csv
│   ├── player_club_mapping.csv
│   └── players.csv
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── LeagueTable.tsx
│       │   ├── ClubHeader.tsx
│       │   ├── PlayerCard.tsx
│       │   ├── PlayerDetail.tsx
│       │   └── ...
│       ├── data/ (JSON-filer genererade från pipeline)
│       ├── types/
│       ├── utils/
│       ├── styles/
│       ├── assets/
│       └── App.tsx
└── package.json
```

## 🔧 Tech Stack

**Data Pipeline:** Python, Pandas, Jupyter

**Frontend:** React, TypeScript, SCSS, Vite

**Hosting:** Vercel

## 🚀 Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Körs på `http://localhost:5173`

## 💾 Data

Använder dataset från Goalunit (3 CSV-filer: spelare, klubbar, matcher). Data är processad genom en Python pipeline som normaliserar, städar och exporterar som JSON för frontend.

Dataset täcker en säsong, vilket begränsade vissa features (transferhistorik, osv). Fokuserade på en solid och komplett user flow istället.
