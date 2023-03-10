import './App.css';
import Container from './components/Container';
import Contexts from './components/Contexts';
import Login from './components/Login';
import SearchPanel from './components/SearchPanel';

function App() {

  return (
    <Contexts>
      <div className="App">
        <Container />
      </div>
    </Contexts>
  );
}

export default App;
