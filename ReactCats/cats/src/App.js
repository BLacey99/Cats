import logo from './logo.svg';
import './App.css';
import CatCard from './components/CatCard/CatCard';
import CatCardBuilder from './components/CatCard/CatCardBuilder';
function App() {

  const data1 = ['q', 'r', 's', 't', 'u'];
  const data2= [0, 9, 8, 7, 6];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CatCardBuilder
        data1 = {data1}
        data2 = {data2}
        />
      </header>
    </div>
  );
}

export default App;
