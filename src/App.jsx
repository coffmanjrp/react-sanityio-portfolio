import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, SinglePost, Post, Project } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:slug" component={SinglePost} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/project" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
