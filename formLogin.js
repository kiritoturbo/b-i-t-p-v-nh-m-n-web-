function clickbutton(){
    var u  =document.getElementById("username").value;
    var p1  =document.getElementById("password").value;

    if(u==""){
        document.getElementById("message").style.color='red';
        document.getElementById("message").innerHTML='cần nhập username';
        return false;
    }else if(p1==""){
        document.getElementById("message").style.color="blue";
        document.getElementById("message").innerHTML="cần nhập password";
        return false;
    }else{
        document.getElementById("message").style.color="green";
        document.getElementById("message").innerHTML='<div style="border :1px solid blue;background-color: black;width:20px;height:30px"></div>';
    }

}