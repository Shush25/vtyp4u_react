import { createSelector } from  'reselect';

const selectavailblereq = state => state.availblereq;

export const selectAvailableReq = createSelector(
    [selectavailblereq],
    availblereq => availblereq.available_request
);