import { AUTH_SUCCESS } from './actions';

const initialState = {
    login: false,
    userId: "",
    username: ""
};

export const userLogin = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case AUTH_SUCCESS:
            const { userId, username } = payload;
            return { login: true, userId, username};
        default:
            return state;
    }
}