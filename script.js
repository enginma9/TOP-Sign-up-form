const password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password")
  , submit_btn = document.getElementById("grasp_btn");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
        //document.getElementById("theOnlyForm").submit(); 
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
//submit_btn.addEventListener("click", function(){validatePassword()});