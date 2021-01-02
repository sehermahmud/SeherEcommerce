import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Card } from 'react-bootstrap';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const CheckoutPage = ({ cartItems, total }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(cartItems);
    console.log(total);
    console.log(address);
    console.log(address2);
    console.log(country);
    console.log(city);
    console.log(zip);

  };

  const Citydata = [
    { City: 'Choose...' },
    { City: 'Dhaka' },
    { City: 'Chittagong' },
    { City: 'Khulna' },
    { City: 'Rajshahi' },
    { City: 'Narayanganz' },
    { City: 'Gazipur' },
    { City: 'Sylhet' },
    { City: 'Barishal' },
    { City: 'Rangpur' },
    { City: 'Comilla' },
    { City: 'Mymensingh	' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ City }) => {
      return (
        <option key={City} value={City}>
          {City}
        </option>
      );
    });

  const Countrydata = [{ Country: 'Choose...' }, { Country: 'Bangladesh' }]
    .filter((linkConfig) => linkConfig)
    .map(({ Country }) => {
      return (
        <option key={Country} value={Country}>
          {Country}
        </option>
      );
    });

  return (
    <div>
      {cartItems.length ? (
        <Card elevation="5" style={{ borderRadius: '1em', margin: '1em' }}>
          <CardContent>
            <div className="checkout-page">
              <Typography variant="h4" className="checkoutTitle">
                Checkout
              </Typography>
              <br />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      name="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      name="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputFullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFullName"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    name="Full Name"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      name="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoneNumber">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhoneNumber"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      name="Phone Number"
                    />
                  </div>
                </div>
                <br />
                <Typography variant="h5">Your Orders</Typography>
                <div className="checkout-header">
                  <div className="header-block">
                    <span>Product</span>
                  </div>
                  <div className="header-block">
                    <span>Description</span>
                  </div>
                  <div className="header-block">
                    <span>Quantity</span>
                  </div>
                  <div className="header-block">
                    <span>Price</span>
                  </div>
                  <div className="header-block">
                    <span>Remove</span>
                  </div>
                </div>
                {cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} name="cart" />
                ))}
                <div className="total" name="total">TOTAL: ${total}</div>
                <br />
                <Typography variant="h5">Information to reach you</Typography>
                <br />
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    name="Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    value={address2}
                    onChange={(event) => setAddress2(event.target.value)}
                    name="Address 2"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputCountry">Country</label>
                    <select
                      id="inputCountry"
                      className="form-control"
                      onChange={(event) => setCountry(event.target.value)}
                      name="Country"
                    >
                      {Countrydata}
                    </select>
                    <label style={{ fontSize: '0.8em' }} htmlFor="Bangladesh">
                      Only Bangladesh
                    </label>
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="inputCity">City</label>
                    <select
                      id="inputCity"
                      className="form-control"
                      onChange={(event) => setCity(event.target.value)}
                      name="City"
                    >
                      {Citydata}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      value={zip}
                      onChange={(event) => setZip(event.target.value)}
                      name="Zip"
                    />
                  </div>
                </div>
                <br />
                <Card elevation={10} style={{}}>
                  <CardContent>
                    <Typography>
                      we will get a email, send to us, of the Information and the
                      order you had gave
                  </Typography>
                  </CardContent>
                </Card>
                <div>
                  <CustomButton
                    style={{ color: '#ff4081' }}
                    onClick={handleSubmit}
                  >
                    Order now
                </CustomButton>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      ) : (
          <div className="checkout-page">
            <div className="checkout-header">
              <div className="header-block">
                <span>Product</span>
              </div>
              <div className="header-block">
                <span>Description</span>
              </div>
              <div className="header-block">
                <span>Quantity</span>
              </div>
              <div className="header-block">
                <span>Price</span>
              </div>
              <div className="header-block">
                <span>Remove</span>
              </div>
            </div>
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
                <div>
                  <br />
                  <br />
                  <span style={{ fontWeight: '2em', fontSize: '2.5em' }}>
                    Your cart is empty
              </span>
                </div>
              )}
          </div>
        )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
