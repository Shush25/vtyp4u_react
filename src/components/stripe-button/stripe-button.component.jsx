import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const puclishablekey = 'pk_test_51HhI0oIk7N2b0xuKuEGn2KhrHtTyii733tQ90N76GusOmbImr0rG381YqPqhuxWpJR5DFH4H4DLxTXNCbacELAVt00LZxlLx0L';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
          label='Pay Now'
          name='Vtyp4u Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount = {priceForStripe}
          panelLabel='Pay Now'
          token={ onToken }
          stripeKey = { puclishablekey }
        />
    );
};

export default StripeCheckoutButton;