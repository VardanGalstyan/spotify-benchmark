import './App.css';
import ArtistPage from './components/ArtistPage';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LeftNavbar from './components/LeftNavbar';


function App() {
  return (
    <Router>
      <LeftNavbar/>
      <Route path='/HomePage' exact component={HomePage}/>
      <Route path='/ArtistPage' component={ArtistPage}/>
    </Router>
  );
}

export default App;
