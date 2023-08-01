$(document).ready(function() {
    $("#btnSend").on("click", function() {
        console.log("Send Clicked....");

        validateInput();
    });
    
    $("#btnClear").on("click", function() {
        // when clear is clicked we want to set the values of the text boxes to be empty.
        clearInput();
    });
});

function clearInput(){
    $("#txtName").val("");
    $("#txtEmail").val("");
    $("#txtTelephone").val("");
    $("#txtMessage").val("");
}

function validateInput() {
    var name = $("#txtName").val();
    var email = $("#txtEmail").val();
    var tel = $("#txtTelephone").val();
    var message = $("#txtMessage").val();

    // Check if name is empty string
    if(name === "" || !name) {
        console.log("Name is empty"); 
        alert("Please enter your name.")
        return false;
    }

    // check if email is empty string
    if(email === "" || !email) {
        console.log("Email is empty");
        alert("Please enter your email address.")
        return false;
    }
    else {
        // if email is not emptyu string, create a email regex
        var validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // now we use the above regex to make sure the email is in the format "X@X.XX"
        if(!email.match(validEmailRegex)) {
            console.log("Email not valid");
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(message === "" || !message) {
        console.log("Message not valid");
        alert("Please enter a message");
        return false;
    }

    return true;
}
