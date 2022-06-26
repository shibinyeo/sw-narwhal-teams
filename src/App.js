import { useState } from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Activityfeed from "./components/Activityfeed";

function App() {
  const [tabState, setTabState] = useState(1);

  return (
    <div className="app-container">
      <Sidenav />
      <div className="app-content">
        <Navbar />
        <Header tabState={tabState} setTabState={setTabState} />
        <div className="app-data">
          <Content tabState={tabState} />
          <Activityfeed />
        </div>
      </div>
    </div>
  );
}

export default App;
