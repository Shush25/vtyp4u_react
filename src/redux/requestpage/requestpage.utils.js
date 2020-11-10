export const addMain = (requestItems,requestItemsToAdd)=> {
    return [...requestItems, {...requestItemsToAdd}]
};