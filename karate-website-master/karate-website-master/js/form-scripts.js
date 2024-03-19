$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
  //  var message = $("#message").val();
    var weight = $("#weight").val();
    var age = $("#age").val();

    var dob = $("#dob").val();
    var phone = $("#phone").val();
    var pgname = $("#pgname").val();
    var club = $("#club").val();
    var gender = $("#gender").val();
    var funactiv = $("#funactiv").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
      //  data: "name=" + name + "&email=" + email + "&message=" + message + "&weight=" + weight + "&age=" + age,
      data: "name=" + name + "&email=" + email + "&weight=" + weight + "&age=" + age + "&dob=" + dob + "&phone=" + phone + "&pgname=" + pgname + "&club=" + club + "&gender=" + gender + "&funactiv" + funactiv,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}