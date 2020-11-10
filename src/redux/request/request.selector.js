import { createSelector } from 'reselect';

const selectRequest = state => state.request;

export const selectRequestItems = createSelector(
    [selectRequest],
    request => request.requestItems
);

export const selectRequestItemsidvalue = createSelector(
    [selectRequestItems],
    requestItems => 
        requestItems.reduce(
            (accumlatedQuantity)=> accumlatedQuantity + 1,
        0
    )
);

export const selectRequestTotal = createSelector(
    [selectRequestItems],
    requestItems=>
        requestItems.reduce(
            (accumlatedQuantity, requestItems)=>  accumlatedQuantity + parseInt(requestItems.coins),0
        )
);