//Bài 1
// let str="program";
// let str2="";
// for (let i=str.length-1; i>=0; i--){
//     str2 += str[i];
// };
// console.log(str2);



// Bài 2
// function upperCase(str) {
//     let str1 = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (str1[i].length > 0) {
//             str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
//         }
//     }
//     return str1.join(" ");
// }
// let str1 = "this is A Test";
// console.log(upperCase(str1)); 




//Bai 3
// function deleteStr(arr){
//     var a = arr.sort()
//     var newArr = [a[0]]
//     for (let i = 1; i < a.length; i++) {
//       if (a[i] !== a[i - 1]) {
//         newArr += a[i];
//       }
//     }
//     return newArr
// };
// let  Arr=[1,2,3,3,4,5,4,4,4,5,5];
// console.log(deleteStr(Arr));



//Bai 4
// function arrange(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let Arr = [5, 2, 3, 4, 1];
// console.log(arrange(Arr)); 




// Bai 5
// let quanLy = [
//     "Trang", "Hùng", "Thư",
// ];
// function showArray(){
//     for (let index in quanLy) {
//         console.log(`${+index+1}.${quanLy[index]}`);
//     };
// }
// loop = true;
// let userInput = prompt("Chọn chức năng bạn muốn thực hiện (Read 'R', Create 'C', Update 'U', Delete 'D')").toUpperCase();
// while(loop = true){
//     if(userInput=='R'){
//         showArray();
//         break;
//     }else if(userInput=='C'){
//         let newNV=prompt("Thêm nhân viên mới");
//         quanLy.push(newNV);
//         showArray();
//         break;
//     }else if(userInput=='U'){
//         let updateIndex=prompt("Nhập vị trí muốn sửa");
//         let newNV = prompt("Nhập nhân viên mới");
//         quanLy[updateIndex]=newNV;
//         showArray();
//         break;
//     }else if(userInput=='D'){
//         let newNV = prompt("Nhập vị trí muốn xóa");
//         quanLy.splice(newNV,1);
//         showArray();
//         break;
//     }
// };



// Bài 6
// function leapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// function testTime(day, month, year) {
//     let maxDay;
//     if (month == 2) {
//         maxDay = leapYear(year) ? 29 : 28;
//     } else if ([4, 6, 9, 11].includes(month)) {
//         maxDay = 30;  
//     } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//         maxDay = 31; 
//     } else {
//         return false;
//     }
//     return day >= 1 && day <= maxDay;
// }
// function getNextDay(day, month, year) {
//     let maxDay;
//     if (month == 2) {
//         maxDay = leapYear(year) ? 29 : 28;
//     } else if ([4, 6, 9, 11].includes(month)) {
//         maxDay = 30;
//     } else {
//         maxDay = 31;
//     }
//     if (day === maxDay) {
//         day = 1;
//         month++;
//         if (month > 12) {
//             month = 1;
//             year++;
//         }
//     } else {
//         day++;
//     }
//     return { day, month, year };
// }
// function main() {
//     let day = parseInt(prompt("Nhập ngày:"));
//     let month = parseInt(prompt("Nhập tháng:"));
//     let year = parseInt(prompt("Nhập năm:"));
//     if (testTime(day, month, year)) {
//         console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`);
//         const nextDay = getNextDay(day, month, year);
//         console.log(`Ngày tiếp theo là: ${nextDay.day}/${nextDay.month}/${nextDay.year}`);
//     } else {
//         console.log(`Ngày ${day}/${month}/${year} không hợp lệ.`);
//     }
// }
// main();


// Bài 7
let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
let cart = [];

function listBooks() {
    console.log("Danh sách sách trong cửa hàng:");
    for (let i = 0; i < bookStore.length; i++) {
        console.log(`${i + 1}. ${bookStore[i]}`);
    }
}

function addCart(c) {
    if (c >= 1 && c <= bookStore.length) {
        cart.push(bookStore[c - 1]);
        console.log(`Bạn đã thêm sách "${bookStore[c - 1]}" vào giỏ hàng.`);
    } else {
        console.log("Số sách không hợp lệ.");
    }
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng của bạn đang trống.");
    } else {
        console.log("Giỏ hàng của bạn:");
        for (let i = 0; i < cart.length; i++) {
            console.log(`${i + 1}. ${cart[i]}`);
        }
    }
}

function main() {
    let continueShopping = true;
    
    while (continueShopping) {
        listBooks();
        let choice = prompt("Nhập tên sách bạn muốn mua (hoặc nhập 0 để xem giỏ hàng):");
        choice = parseInt(choice);
        if (choice === 0) {
            viewCart();
            continueShopping = confirm("Bạn có muốn tiếp tục mua hàng không?");
        } else {
            addCart(choice);
        }
        break;
    }
    console.log("Cảm ơn bạn đã mua hàng!");
}
main();
