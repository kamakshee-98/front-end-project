/*Login script*/ 

//login.html linked with login.js 

//validation form  

function myFunction(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if(name === "admin@admin.com" || password === "123456"){
        alert("Login Successfull");
    }
    else{
        alert("Incorrect E-Mail or Password");
    }
}