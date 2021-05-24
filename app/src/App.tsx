import './App.css';
import {Route, Switch,} from "react-router-dom";
import BookmarksList from './collections/BookmarksList';

function App() {
  return (
    <Switch>
      <Route path="/:id?">
        <BookmarksList/>
      </Route>
    </Switch>
  );
}

export default App;
