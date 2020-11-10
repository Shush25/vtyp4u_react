import RequestpageActionTypes from './requestpage.type';

export const addMain = request =>({
    type:RequestpageActionTypes.ADD_TO_MAIN,
    payload: request
});