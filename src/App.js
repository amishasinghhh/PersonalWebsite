import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutme';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div></div>
      <NavBar />
      <AboutMe />

    </div>
  );
}

export default App;
