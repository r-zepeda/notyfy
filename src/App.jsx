import './App.css';
import './styles/main.css';
import SideNav from './components/side-nav';
import MainNav from './components/main-nav';

function App() {
  return (
    <div className="App">
      <div className='dashboard'>
        <SideNav />
        <main>
          <MainNav />
          <div className='main-body'>
            <h1 className='main-greeting'>Hello, Ralph.</h1>
            <h1 className='sub-greeting'>How can I help you today?</h1>
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
