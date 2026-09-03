# Goalunit Application

A small project built on Goalunit's own data (player valuations and club data for the Premier League, 2023/24 & 2024/25), made for a LIA/internship application.

**Live demo:** [goalunit-application.vercel.app](https://goalunit-application.vercel.app/)

## What it does

Browse Premier League clubs, see squad size and total squad value, and explore each player's estimated value, contract status, and basic profile.

## Structure

```
goalunit-application/
├── analysis/          Jupyter notebooks — data exploration and the pipeline that generates the JSON files below
├── data/              Local CSV files (not committed, see .gitignore)
└── frontend/          React + TypeScript app (Vite)
```

## Tech stack

- **Data pipeline:** Python, pandas, Jupyter
- **Frontend:** React, TypeScript, SCSS, Vite
- **Hosting:** Vercel

## Running it locally

**Data pipeline** (only needed if you want to regenerate the JSON files):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install pandas numpy jupyter
jupyter notebook analysis/data_pipeline.ipynb
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

## Notes

- The dataset only covers one season of match data, so some features (like a full transfer-history view) weren't possible to build honestly with what's available.
- A "sell now" signal (flagging players with high value and little contract time left) was explored but left out to keep the scope focused on a complete, polished flow instead.
