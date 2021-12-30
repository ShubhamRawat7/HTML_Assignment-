function validateInfo() {
    var F_name = document.getElementById("fname").value;
    F_name = F_name.trim();
    if(F_name == ""){
        alert("Error ! Name should not be Empty..");
        document.getElementById("fname_input").value="";
        window.location.href="index.html";
    } 
}
