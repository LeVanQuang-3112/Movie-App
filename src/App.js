import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import AddMovie from './components/AddMovie';
import {GlobalProvider} from "./context/GlobalState"
import MovieDetail from './components/MovieDetail';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
      <Router>
      <Header/>
      <div className="container">
      <Switch>
        <Route exact path="/">
          <WatchList/>
        </Route>
        <Route path="/watched">
          <Watched/>
        </Route>
        <Route path="/add">
          <AddMovie/>
        </Route>
        <Route path="/movie/:id">
          <MovieDetail/>
        </Route>
      </Switch>
        </div>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
