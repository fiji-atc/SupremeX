// ==UserScript==
// @name         SupremeX
// @namespace    http://www.supremenewyork.com/
// @version      1.0.0
// @description  Complete checkout quickly
// @author       fiji @ adidas atc
// @grant        none
// @include      https://www.supremenewyork.com/checkout
// ==/UserScript==

var order_info = {name: "your name", // your first and last name
                  email: "your@email.com", // your email
                  phone: "5555555555", // your phone number
                  address1: "123 cook lane", // your street address
                  address2: "apartment 1", // leave blank if you dont have one
                  zip_code: "00000", // your zip code
                  city: "New York", // city
                  state_code: "NY", // state code, if you dont know this then look it up son
                  country: "USA" // only two options, "USA" or "CANADA"
                 };
var card_info = {cc_number: "xxx", // your full credit card number
                 cc_cvv: "xxx", // the 3 digit security code
                 cc_month: "04", // month of expiration, if it is 1-9 use 01, 02, 03...
                 cc_year: "2019" // year of expiration
                };

(function() {
    'use strict';

    // billing/shipping information
    document.getElementsByName("order[billing_name]")[0].value = order_info.name;
    document.getElementsByName("order[email]")[0].value = order_info.email;
    document.getElementsByName("order[tel]")[0].value = order_info.phone;
    document.getElementsByName("order[billing_address]")[0].value = order_info.address1;
    document.getElementsByName("order[billing_address_2]")[0].value = order_info.address2;
    document.getElementsByName("order[billing_zip]")[0].value = order_info.zip_code;
    document.getElementsByName("order[billing_city]")[0].value = order_info.city;
    document.getElementsByName("order[billing_state]")[0].value = order_info.state_code;
    document.getElementsByName("order[billing_country]")[0].value = order_info.country;

    // credit card information
    document.getElementsByName("credit_card[cnb]")[0].value = card_info.cc_number;
    document.getElementsByName("credit_card[vval]")[0].value = card_info.cc_cvv;
    document.getElementsByName("credit_card[month]")[0].value = card_info.cc_month;
    document.getElementsByName("credit_card[year]")[0].value = card_info.cc_year;

    // accept terms
    $('div.icheckbox_minimal').iCheck('check');

    // complete
    document.getElementsByClassName("button checkout")[0].click();
})();
