type Stat = {
  label: string;
  value: string | number;
};

type StatsBarProps = {
  title: string;
  subtitle: string;
  stats: Stat[];
};

const StatsBar = ({ title, subtitle, stats }: StatsBarProps) => {
  return (
    <div className="stats-bar">
      <div className="stats-bar__intro">
        <h1 className="stats-bar__title">{title}</h1>
        <p className="stats-bar__subtitle">{subtitle}</p>
      </div>
      <div className="stats-bar__stats">
        {stats.map((stat) => (
          <div className="stats-bar__stat" key={stat.label}>
            <span className="stats-bar__label">{stat.label}</span>
            <span className="stats-bar__value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
