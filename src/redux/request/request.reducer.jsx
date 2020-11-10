import RequestActionTypes from './request.types';
import { addRequestToPage, addCoinsToRequest, removeCoinsFromRequest } from './request.utils';

const INITIAL_STATE = {
    requestItems: []
};

const requestReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case RequestActionTypes.ADD_REQUEST:
            return{
                ...state,
                requestItems: addRequestToPage(state.requestItems, action.payload)
            };
        case RequestActionTypes.CLEAR_REQUEST:
            return{
                ...state,
                requestItems: state.requestItems.filter(
                    requestItem=> requestItem.id !== action.payload.id
                )
            };
        case RequestActionTypes.REMOVE_REQUEST:
            return{
                ...state,
                requestItems: []
            }
        case RequestActionTypes.ADD_COINS:
            return{
                ...state,
                requestItems: addCoinsToRequest(state.requestItems, action.payload)
            };
        case RequestActionTypes.REMOVE_COINS:
            return{
                ...state,
                requestItems: removeCoinsFromRequest(state.requestItems, action.payload)
            };
        default:
            return state;
    }
};

export default requestReducer;