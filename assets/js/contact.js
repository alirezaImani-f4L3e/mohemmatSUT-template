// VALIDATION FOR EMAIL 
function emailValidator(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        // inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const msg = document.getElementById('message');

        // message boxes
        // const nameMSG = document.getElementById('nameMSG');
        // const emailMSG = Document.getElementById('mailMSG');
        // const messageMSG = Document.getElementById('messageMSG');

        // VALIDATE NAME INPUT
        if (name.value.length < 4) {
            // $("#name").addClass('formInputError');
            $("#nameMSG").css({
                'display': 'block',
            });
            return false

        }
        if (emailValidator(email.value) == false) { // VALIDATE EMAIL INPUT
            // $("#email").addClass('formInputError');
            $("#mailMSG").css({
                'display': 'block',
            });
            return false
        }
        if (msg.value.length < 10) { // VALIDATE MESSAGE INPUT 
            // $("#message").addClass('formInputError');
            $("#messageMSG").css({
                'display': 'block',
            });
            return false
        }


    });
    $('input,textarea').keypress(function(e) {

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const msg = document.getElementById('message');
        // VALIDATE NAME INPUT
        if (name.value.length >= 4) {
            $("#nameMSG").css({
                'display': 'none',
            });
        }
        if (msg.value.length >= 10) {
            $("#messageMSG").css({
                'display': 'none',
            });
        }
        if (emailValidator(email.value) == true) {
            // VALIDATE EMAIL INPUT
            $("#mailMSG").css({
                'display': 'none',
            });
        }
    });

});