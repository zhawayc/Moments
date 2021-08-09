export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (userId, username) => ({
    type: AUTH_SUCCESS,
    payload: { userId, username }
});