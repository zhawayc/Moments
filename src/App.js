import Content from './Content';
import NavBar from './NavBar';
import { HashRouter as Router } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Grid>
          <Content />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
