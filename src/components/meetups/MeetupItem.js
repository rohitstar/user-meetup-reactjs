import { useContext } from "react";
import {  Link } from 'react-router-dom';
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/Favorites-Context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  const favoritesTaggleHandler = () => {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <Link to={`/all-meetup/${props.id}`} >
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        </Link>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button style={{ marginRight: '10px' }} onClick={favoritesTaggleHandler}>{ itemIsFavorites ? 'Remove From Favorites' : 'To Favorites'}</button>
        <Link to={`/all-meetup/${props.id}`} >
          <button>Full Detail</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
