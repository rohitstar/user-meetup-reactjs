import { useEffect, useState } from 'react';
import classes from './FavoritesDetail.module.css';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useParams } from 'react-router-dom';


function FavoritesDetail () {
  const [loading, setLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState();

  const params = useParams();
  // console.log(params);
  const { meetupId } = params;

  
  useEffect(async() => {
    setLoading(true);
    const response = await fetch(`https://meetup-react-hooks-project-default-rtdb.firebaseio.com/meetups/${meetupId}.json`);
    const data = await response.json();
    if (!response.ok) {
          throw new Error(data.message || "Could not fetch favorites data.")
        }
    console.log(data);
   
    setLoadedMeetup(data);
   setLoading(false);
  }, [])

  

  if (loading) {
    return (
      <section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingSpinner />
        </div>
      </section>
    );
  }
      return (
          <figure>
            <div className={classes.image}>
          <img src={loadedMeetup.image} alt={loadedMeetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{loadedMeetup.title}</h3>
          <address>{loadedMeetup.address}</address>
          <p>{loadedMeetup.description}</p>
        </div>
          </figure>
      )
}

export default FavoritesDetail;