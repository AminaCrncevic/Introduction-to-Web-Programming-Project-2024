// checkout_validation.js

$(document).ready(function() {
    // Validate the checkout form
    $("#checkout-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            zipcode: {
                required: true
            },
            country: {
                required: true
            },
            card_number: {
                required: true
            },
            cvv: {
                required: true
            },
            name_on_card: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your full name"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            address: {
                required: "Please enter your address"
            },
            city: {
                required: "Please enter your city"
            },
            zipcode: {
                required: "Please enter your zip code"
            },
            country: {
                required: "Please enter your country"
            },
            card_number: {
                required: "Please enter your card number"
            },
            cvv: {
                required: "Please enter your CVV"
            },
            name_on_card: {
                required: "Please enter the name on your card"
            }
        },
        submitHandler: function(form) {
            var formData = $(form).serializeArray();
            console.log("Form data:", formData);
        }
    });
});
