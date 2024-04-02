// registration_validation.js

$(document).ready(function() {
    $("#registration-form").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 2 
            },
            last_name: {
                required: true,
                minlength: 2 
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5 
            }
        },
        messages: {
            first_name: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 2 characters"
            },
            last_name: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        submitHandler: function(form) {
            var formData = $(form).serializeArray();
            console.log("Form data:", formData);
           
        }
    });
});
