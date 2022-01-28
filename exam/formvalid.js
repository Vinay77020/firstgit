function myForm(){
    var name = document.vinay.name.value;
    var pass = document.vinay.pswd.value;
    
    if(name == "" || name == null){
        alert("Username can't be blank");
        return false;
        }
    else if(pass.length < 8){
        alert("Password length must be 8 charachters long");
        return false;
        }
    else if(pass == "" || pass == null){
        alert("Password can't be blank");
    }
    else{
        alert("Sign Up successful");
        return true;
         }
    }