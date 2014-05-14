$(document).ready(function(){
    $("#submit").click(function(){
        var validated = true;
        var name = document.getElementById("fname").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var nameForm = document.getElementById("name-form");
        var emailForm = document.getElementById("email-form");
        var messageForm = document.getElementById("message-form");
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        if (name == null || name == "") {
            nameForm.className += " has-error";
            validated = false;
        }
        
        if (email == null || email == "") {
            emailForm.className += " has-error";
            validated = false;
        }
        else  if (!emailReg.test(email)){
            emailForm.className+= " has-error";
            validated=false;
        }
        else emailForm.className = emailForm.className.replace("has-error","has-success");
        
        if (message == null || message == "") {
            messageForm.className += " has-error";
            validated = false;
        }
        else messageForm.className = messageForm.className.replace("has-error","has-success");
        
        if (validated){
            $.post("php/email.php",
                { emailTo: "rkuncewicz@gmail.com", emailFrom: email, subject: name, message: message },
                    function(data){
                            $("#submit").before('<h1>Success</h1><p>Your email was sent.</p>');                                          
                    }
                 );
            return true; 
        } 
        else return false;
    });
});
