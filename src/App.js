import { Route, Switch, Redirect } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import FavoritesDetail from './pages/FavoritesDetail'
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
          <Redirect to="/all-meetup" />
        </Route>
        <Route path='/all-meetup' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/all-meetup/:meetupId' >
          <FavoritesDetail />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
