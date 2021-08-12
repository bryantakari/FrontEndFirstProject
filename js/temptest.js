function isNum(val){
    if(val >= 48 && val <= 57){
        return false;
    }else{
        return true;
    }
}

function validation(){
    var name = document.forms.registerForm.name.value;
    var username = document.forms.registerForm.username.value;
    var gender = document.forms.registerForm.gender.value;
    var age = document.forms.registerForm.age.value;
    var email = document.forms.registerForm.email.value;
    var password = document.forms.registerForm.password.value;
    var confirmpassword = document.forms.registerForm.confirmPassword.value;
    var agreeterms = document.forms.registerForm.agree.checked;
    
    if(name == ""){
        document.getElementById('error-name').innerText = "Name must not be empty";
    }
    if(username == "" || username.length < 5){
        document.getElementById('error-username').innerText = "Username length must be above 5 characters";
    }
    if(gender == ""){
        document.getElementById('error-gender').innerText = "Gender must be Checked!";
    }
    if(age == ""){
        document.getElementById('error-age').innerText = "Age must not be empty!";
    }
    for(var i = 0; i < age.length; i++){
        if(isNum(age.codePointAt(i)) == true){
            document.getElementById('error-age').innerText = "Age must be numeric!";
        }
    }
    if(email == "" || email.endWith(".com") == false){
        document.getElementById('error-email').innerText = "Email must be ended with .com";
    }
    if(agreeterms == false){
        document.getElementById('error-agree').innerText = "You must Agree terms and conditions!";
    }
    if(password == "" || password.length < 5){
        document.getElementById('error-password').innerText = "Password cannot be empty and length must be 5 above";
    }
    if( password != confirmpassword){
        document.getElementById('error-confirmPassword').innerText = "Password and Confirm Password must be same";
    }
    if(confirmpassword == ""){
        document.getElementById('error-confirmPassword').innerText = "Confirm Password cannot be empty";
    }
    
}