export const addRequestToPage = (requestItems, requestItemToAdd) => {
    return [...requestItems, {...requestItemToAdd}]
};
export const removeCoinsFromRequest =(requestItems, requestItemToRemove) => {
    const existingRequestItem = requestItems.find(
        requestItem => requestItem.id === requestItemToRemove.id
    );

    if(existingRequestItem.coins === 1) {
        return requestItems.filter(requestItem => requestItem.id !== requestItemToRemove.id);
    }

    return requestItems.map(requestItem =>
            requestItem.id === requestItemToRemove.id ?
            {...requestItem, coins: parseInt(requestItem.coins)-1}
            :requestItem
        );
};

export const addCoinsToRequest = (requestItems, requestItemToAdd) =>{
    return requestItems.map(requestItem=>
            requestItem.id === requestItemToAdd.id ?
            {...requestItem, coins: parseInt(requestItem.coins)+10}
            : requestItem
        );
};