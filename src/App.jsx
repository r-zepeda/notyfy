import "./App.css";
import "./styles/main.css";
import SideNav from "./components/side-nav";
import MainNav from "./components/main-nav";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <SideNav />
        <main>
          <MainNav />
          <div className="main-body">
            <div className="main-greeting-container">
              <p className="main-greeting">Hello, Ralph.</p>
              <p className="sub-greeting">How may I help you today?</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
