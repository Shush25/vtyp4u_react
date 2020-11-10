import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {removeRequest} from '../../redux/request/request.action';
import { addMain } from '../../redux/requestpage/requestpage.action';
import{selectRequestItems} from  '../../redux/request/request.selector'

const StripeCheckoutButton = ({ price, removeRequest, requestItems, addMain }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HlgtfJcVs7wfjPgrYVQMIPhsAScvpwexmdkp47vxGrduC6F3E4iXE93VTJHVf8U4Mj2dZUiG0qXKr1cnYWpAuwk00Vi4TXMiH'
    const onToken = token =>{
        console.log(token);
        requestItems.map(requestItem=>
            addMain(requestItem)
            );
        removeRequest();
        alert('payment Successful');
    }

    return(
        <StripeCheckout
            label ='Pay Now'
            currency='INR'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapStateToProps = createStructuredSelector({
    requestItems: selectRequestItems,
})

const mapDispatchToProps = dispatch =>({
    removeRequest: () =>dispatch(removeRequest()),
    addMain: request=>dispatch(addMain(request))
});
export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);