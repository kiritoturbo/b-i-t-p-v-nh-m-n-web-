function click(){
    var u=document.getElementById("username").value;
    var p=document.getElementById("password").value;

    if(u==' '){
        document.getElementById("message").style.color="red";
        document.getElementById("message").innerHTML="cần nhập username";
        return false;
    }
}