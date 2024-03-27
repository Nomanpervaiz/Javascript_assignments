// CHAPTER No 17 to 20

// Solved Q1
// var arr = []
// for (var i=0 ; i < 4 ; i++){
//     document.write(arr,i)
// }


// Solved Q2
// var arr = [
//     [0, 1, 2, 3]
//     , [1, 0, 1, 2]
//     , [2, 1, 0, 1]];
// document.write(arr[0].join(" ") + "<br>")
// document.write(arr[1].join(" ") + "<br>")
// document.write(arr[2].join(" "))


// Solved Q3
// var arr = []
// for (var i = 1; i <= 10; i++) {
//     var element = [i +"<br>"];
//     document.write(element);
// }


// solved Q4
// var tableOf = +prompt("Enter table number")
// var lengthOf = +prompt("Enter table length")
// document.write("Multiplication table of"+" "+(tableOf)+"<br>");
// document.write( "Length of table is"+" "+lengthOf+"<br>");
// document.write( "<br>");
// for (var i = 1 ; i <= lengthOf ; i++) {
//         document.write(tableOf +" " +"x"+" "+ i +" "+"="+" "+ tableOf * i +"<br>");
//  }
// if (tableOf !== tableOf) {
//     document.write("Not valid number")
// }


// Solved Q5
// var arr = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }
// document.write("<br>")
// for (let i = 0; i < arr.length; i++) {
//     document.write(`Element at index ${i} is ${arr[i]} <br>`)
// }


// Solved Q6
// document.write(`<b>Counting :</b> <br> <br>`)
// var counting;
// for (let i = 1; i <= 15; i++) {
//     counting = i;
// document.write(counting+",")
// } 
// document.write(` <br><br> <b>Reverse Counting :</b> <br> <br>`)
// var reverseCounting;
// for (let i = 10; i >= 1; i--) {
//     reverseCounting = i;
// document.write(reverseCounting+",")
// } 
// document.write(` <br><br> <b>Even Numbers :</b> <br> <br>`)
// var evenCounting;
// for (let i = 0; i <= 20; i=i+2) {
//     evenCounting = i;
// document.write(evenCounting+",")
// } 
// document.write(` <br><br> <b>Odd Numbers :</b> <br> <br>`)
// var oddCounting;
// for (let i = 1; i <= 20; i=i+2) {
//     oddCounting = i;
// document.write(oddCounting+",")
// } 
// document.write(` <br><br> <b>Series Numbers :</b> <br> <br>`)
// var evenCounting;
// for (let i = 2; i <= 20; i=i+2) {
//     evenCounting = i;
// document.write(evenCounting+"k"+", ")
// } 


// Solved Q7
// var bakeryItem = ["cake","apple-pie","cookie","chips","patties"];
// var userIndex = prompt("Welcome to our bakery.What do you want to order?")
// var flag = false;
// for (let i = 0; i < bakeryItem.length; i++) {
//     if (userIndex == bakeryItem[i] ) {
//         flag = true;
//         bakeryItem.length = i;
//         document.write(`${userIndex} is available at index ${bakeryItem.length} in our bakery`);
//     }
// }
// if (flag === false) {
//     document.write(`We are sorry .${userIndex} is not available in our bakery`);
// } 


// Solved Q8
// var num1 = [24, 53, 78, 91, 12,];
// var largeNum = num1[0];
// document.write(`Array items :  ${num1} <br>`)
// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] > largeNum) {
//         largeNum = num1[i]
//     }
// }
// document.write(`Largest number is ${largeNum} `)


// Solved Q9
// var num1 = [24, 53, 78, 91, 12,];
// var smallNum = num1[0];
// document.write(`Array items :  ${num1} <br>`)
// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] < smallNum) {
//         smallNum = num1[i]
//     }
// }
// document.write(`Smallest number is ${smallNum} `)


// Solved Q10
// var table = 5; 
// for (var i = 1 ; i <= 20; i++) {
//     document.write(table*i+",")
// }

// CHAPTER NO 17 TO 20 END HERE !
