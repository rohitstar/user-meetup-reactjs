import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from '../store/Favorites-Context'


function FavoritesPage() {
 const favoritesCtx = useContext(FavoritesContext);

let content;

if (favoritesCtx.totalFavorites === 0) {
  content = <h4>You got no favorites yet. Start adding some!!!</h4>
} else {
  content = <MeetupList meetups={favoritesCtx.favorites} />
}

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>;
}

export default FavoritesPage;
