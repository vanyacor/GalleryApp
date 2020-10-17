import { photosAPI } from './../../api/api';
import { checkBubbles } from './../../utils/checkBubbles';

const SET_PHOTOS = 'SET_PHOTOS';
const SET_LOADING = 'SET_LOADING';


const init = {
    photos: [],
    isLoading: false,
    lastPhotos: null,
};

export const photosReducer = (state = init, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: [...state.photos, ...action.usersPhotos],
                lastPhotos: action.usersPhotos
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
};

const set_photos = (usersPhotos) => ({
    type: SET_PHOTOS,
    usersPhotos,
})

const set_loading = (isLoading) => ({
    type: SET_LOADING,
    isLoading,
})

export const getUsersData = (page) => async (dispatch, getState) => {
    const lastPhotos = getState().photosPage.lastPhotos;

    dispatch(set_loading(true));
    let data = await photosAPI.getUsers(page, 10);

    if (lastPhotos) {
        data = data.filter(el => checkBubbles(el, lastPhotos));
    }

    let dispatchData = data.map(userPhoto => {
        return {
            id: userPhoto.id,
            heightToWidthRatio: userPhoto.height / userPhoto.width,
            urls: {
                ...userPhoto.urls
            },
            user: {
                name: userPhoto.user.name,
            }
        }
    });

    dispatch(set_photos(dispatchData));
    dispatch(set_loading(false));
};
