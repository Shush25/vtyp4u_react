import React from 'react';
import { connect } from 'react-redux';

import{ clearRequest,addCoins,removeCoins } from '../../redux/request/request.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({requestItem, clearRequest, removeCoins, addCoins}) => {
    const {id, name, deadline, coins} = requestItem;
    return(
        <div className ='checkout-item'>
        <span className ='id'>{id}</span>
        <span className ='name2'>{name}</span>
        <span className ='quantity'>{deadline}</span>
        <span className ='price'>
            <div className ='arrow' onClick={() => removeCoins(requestItem)}>&#10094;</div>
            <span className='value'>{coins}</span>
            <div className='arrow' onClick={() => addCoins(requestItem)}>&#10095;</div>
        </span>
        <div className ='remove-button' onClick={() => clearRequest(requestItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearRequest: request => dispatch(clearRequest(request)),
    addCoins: request => dispatch(addCoins(request)),
    removeCoins: request => dispatch(removeCoins(request))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);