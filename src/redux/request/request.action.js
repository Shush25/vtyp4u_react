import RequestActionTypes from './request.types';

export const addRequest = request => ({
    type: RequestActionTypes.ADD_REQUEST,
    payload: request
});

export const clearRequest= request => ({
    type: RequestActionTypes.CLEAR_REQUEST,
    payload: request
});

export const removeRequest = () => ({
    type: RequestActionTypes.REMOVE_REQUEST,
});

export const addCoins = request => ({
    type: RequestActionTypes.ADD_COINS,
    payload: request
});

export const removeCoins = request => ({
    type: RequestActionTypes.REMOVE_COINS,
    payload: request
});