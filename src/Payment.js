import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{ basket, user}, dispatch] =useStateValue()


    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = e => {
        
    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
                </h1>
                
                {/* Payment Section - delivery adderss */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Fake Street</p>
                        <p>Anywhere, CA</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* Stripe */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3> 
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Payment
