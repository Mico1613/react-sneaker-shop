import { ISneaker } from "../../types";

export const addToFavourites = (payload:ISneaker) => ({
    type: 'ADD_TO_FAVOURITES',
    payload
})
export const removeFromFavourites = (payload: ISneaker) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    payload
})