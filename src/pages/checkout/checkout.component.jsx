import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import{selectRequestItems, selectRequestTotal} from  '../../redux/request/request.selector';

import './checkout.styles.scss';

const CheckoutPage = ({requestItems, total}) => (
    <div className='checkout'>
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Id</span>
            </div>
            <div className='header-block'>
                <span>Name</span>
            </div>
            <div className='header-block'>
                <span>Deadline</span>
            </div>
            <div className='header-block'>
                <span>Coins</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            requestItems.map(requestItem=>
                <CheckoutItem key={requestItem.id} requestItem={requestItem}/>
                )
        }
        <div className='total'>
            <span>Total: Rs.{total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    requestItems: selectRequestItems,
    total: selectRequestTotal
})

export default connect(mapStateToProps)(CheckoutPage);