import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Activityfeed from "./components/Activityfeed";

function App() {
  return (
    <div className="app-container">
      <Sidenav />
      <div className="app-content">
        <Navbar />
        <Header />
        <div className="app-data">
          <Content />
          <Activityfeed />
        </div>
      </div>
    </div>
  );
}

export default App;
