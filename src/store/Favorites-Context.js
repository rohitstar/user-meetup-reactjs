import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetup) => {},
    removeFavorites: (meetupId) => {},
    itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandle = (favMeetup) => {
        setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.concat(favMeetup);
        } )
    };

    const removeFavoriteHandle = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    };

    const itemIsFavoriteHandle = (meetupId) => {
            return userFavorites.some(meetup => meetup.id === meetupId);
    };


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoriteHandle,
        removeFavorites: removeFavoriteHandle,
        itemIsFavorites: itemIsFavoriteHandle,

    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;