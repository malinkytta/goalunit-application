import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="layout">
      <Sidebar onGoHome={() => {}} />
      <main className="layout__main"></main>
    </div>
  );
};

export default App;
