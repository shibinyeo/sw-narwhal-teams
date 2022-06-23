import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Activityfeed from "./components/Activityfeed";

function App() {
  return (
    <div>
      <Sidenav />
      <Navbar />
      <Header />
      <Content />
      <Activityfeed />
    </div>
  );
}

export default App;
