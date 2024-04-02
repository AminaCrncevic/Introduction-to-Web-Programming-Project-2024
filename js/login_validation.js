// login_validation.js

$(document).ready(function() {
    $("#login-form").validate({
        rules: {
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
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        submitHandler: function(form) {
            var formData = $(form).serializeArray();
            console.log("Login form data:", formData);
            
        }
    });
});