const SET_PHOTO = 'SET_PHOTO';


const init = {
    photo: {}
};

export const FullSizePhotoScreenReduecer = (state = init, action) => {
    switch (action.type) {
        case SET_PHOTO:
            return {
                ...state,
                photo: {
                    ...action.usersPhoto
                },
            }
        default:
            return state;
    }
};

export const set_photo = (usersPhoto) => ({
    type: SET_PHOTO,
    usersPhoto,
})



