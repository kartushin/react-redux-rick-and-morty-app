// import logo from './logo.png';
import './App.css';
import { CharList } from '../CharList';

function App() {
  return (
      <div className="container max-w-4xl mx-auto px-4 pb-8">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div className="main">
          <CharList/>
        </div>
      </div>
  );
}

export default App;
