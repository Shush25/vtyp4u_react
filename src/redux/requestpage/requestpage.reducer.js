import { addMain } from './requestpage.utils';
import RequestpageActionTypes from './requestpage.type';
import user_members from './requestpage.data';
const INITIAL_STATE ={
    available_request: user_members
};

const available_requestReducer = (state =INITIAL_STATE,action) => {
    switch(action.type) {
        case RequestpageActionTypes.ADD_TO_MAIN:
            return{
                ...state,
                available_request: addMain(state.available_request,action.payload)
            };
        default:
            return state;
    }
};

export default available_requestReducer;