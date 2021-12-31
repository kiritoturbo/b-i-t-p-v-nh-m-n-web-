// Thực hành 5.
//     Cho mảng people = ["Greg", "Mary", "Devon", "James"]. Thực hành các yêu cầu sau
//     1. Khai báo mảng People
var people=["Greg","Mary","Devon","James"];
//     2. Sử dụng vòng lặp để in ra tên của các đối tượng trong mảng
for(let i=0;i<people.length;i++){
    console.log("Tên đối tượng thứ "+i+" là:"+people[i]);
}
//     3. Viết lệnh xóa "Greg" khỏi mảng
console.log(people.shift());
console.log(people);
//     4. Viết lệnh xóa "James" khỏi mảng.
console.log(people.pop());
console.log(people);
//     5. Viết lệnh thêm "Matt" vào phía trước của mảng.
console.log(people.unshift("Matt"));
console.log(people);
//     6. Viết lệnh thêm tên của bạn vào cuối mảng.
console.log(people.push("Trường"));
console.log(people);
//     7. Sử dụng vòng lặp, lặp qua mảng này và sau khi console.log "Mary", thoát khỏi vòng lặp.
for(var i=0;i<people.length;i++){
    console.log(people[i]);
    if(people[i]=="Mary"){
        break;
    }
}
//     8. Viết lệnh để tạo một bản sao của mảng sử dụng slice. Bản sao KHÔNG được bao gồm "Mary" hoặc "Matt".
console.log(people.slice(2,4));
//     9. Viết lệnh cung cấp indexOf nơi "Mary" được đặt.
console.log(people.indexOf("Mary"));
//     10. Xác định lại số người bằng giá trị mà khởi tạo. Sử dụng lệnh splice, xóa "Devon" khỏi mảng và thêm "Elizabeth"
//     và "Artie". Mảng của kết quả ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log(people.splice(2,1,"Elizabeth","Artie"));
console.log(people);
//     11. Tạo một biến mới được gọi là withBob và đặt nó bằng với mảng người được nối với chuỗi "Bob"
var Bob=["đây là Trường làm nha"];
var withBob=people.concat(Bob);
console.log(withBob);