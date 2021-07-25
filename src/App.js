import Content from './Content';
import NavBar from './NavBar';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Content />
      </Router>
    </div>
  );
}

export default App;
