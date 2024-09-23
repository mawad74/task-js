


function validate(){
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpass = document.getElementById("confirmpassword").value;
    var error = document.getElementById("error");


    error.classList.add("alert");
    error.classList.add("alert-danger");
    error.classList.add("text-center");
    error.classList.add("error2");

    


    var text="";
    if(user==""&& email=="" && password==""&& confpass==""){
        text="Please fill in all fields";
        error.innerHTML=text;
        return false;
    }else if(user.length <5 || user.length >13){
        text ="please Insert 5-15 character in username";
        error.innerHTML=text;
        return false;
    }else if(email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        text="Please enter a valid email address";
        error.innerHTML=text;

        return false;
    }else if(password.length<8){
        text="Password must be at least 8 characters long";
        error.innerHTML=text;
        return false;
    }else if(password != confpass){
        text="Passwords do not match";
        error.innerHTML=text;
        return false;
    }else{
        return true;
    }
    
}

