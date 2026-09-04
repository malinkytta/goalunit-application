const inactiveNavItems = ["Transfers", "Settings"];

const Sidebar = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__brand">Goalunit Explorer</h1>
      <nav className="sidebar__nav">
        <div className="sidebar__item sidebar__item--active" onClick={onGoHome}>
          Clubs
        </div>
        <div className="sidebar__divider" />
        {inactiveNavItems.map((item) => (
          <div key={item} className="sidebar__item sidebar__item--disabled">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
