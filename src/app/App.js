import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import Home from './Home';
import Session1 from './session1/Main';
import Session2 from './session2/Main';
import Session3 from './session3/Main';
import Session4 from './session4/Main';
import Session5 from './session5/Main';
import Session6 from './session6/Main';
import './App.css';
import './session2/Main.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main className="app">
          <AppHeader />
          <AppContent>
            <Route exact path="/" component={Home} />
            <Route path="/session1" component={Session1} />
            <Route path="/session2" component={Session2} />
            <Route path="/session3" component={Session3} />
            <Route path="/session4" component={Session4} />
            <Route path="/session5" component={Session5} />
            <Route path="/session6" component={Session6} />
          </AppContent>
          <AppFooter />
        </main>
      </Router>
    );
  }
}

export default App;
