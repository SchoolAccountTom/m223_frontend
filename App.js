import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Hier können Sie Links oder Navigationsleisten hinzufügen */}
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
          {/* Weitere Routen hier hinzufügen */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
