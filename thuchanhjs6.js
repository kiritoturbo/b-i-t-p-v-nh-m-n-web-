// Thực hành 6. Sử dụng kết hợp câu lệnh điều kiện, hàm promt để viết chương trình giải phương trình bậc 1: ax+b=0
// bằng Javascript
var a=prompt("mời bạn nhập a");
var b=prompt("mời bạn nhập b");
if(isNaN(a)||isNaN(b)){
    alert("Hãy nhập vào số");
    location.reload();//để load lại trang 
}else if(a==""||b==""){
    alert("Cần nhập số để tính");
    location.reload(); 
} 
else if(a==0){
    if(b==0){
        document.write("phương trình này vô số nghiệm");
    }
    else{
        document.write("phương trình này vô nghiệm ");
    }
}else{
    document.write("phương trình này có nghiệm (-b/a) là :"+(-b/a));
}
