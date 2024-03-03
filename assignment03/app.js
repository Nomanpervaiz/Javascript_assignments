
// chapter 9 to 11 (User Input And Condition Statements)

// Solved Q1
// var city = prompt ("Enter your gender");
// if (city === "Karachi","karachi"){
//     alert("Welcome to city of lights");
// }


// Solved Q2
// var gender = prompt ("Enter your gender");
// var message = "Not match" ;
// if (gender === "Male"){
//     message=("Good morning sir");
// }
// if (gender === "Female"){
//     message=("Good morning Ma'am");
// }
// alert(message);


// Solved Q3
// document.write("<table border='2'>");
// document.write("<tr><th>Signal color</th> <th>Message</th><tr>");
// var signalColor1=prompt("Enter signal color name ")  
// var message1=("Must stop");  
// var message2=("Ready to move");  
// var message3=("Move now");  
// if(signalColor1==="red"){
//     document.write("<tr><td>"+signalColor1+"</td>"+"<td>"+message1+"</td></tr>");
// }
// else if(signalColor1==="yellow"){
//     document.write("<tr><td>"+signalColor1+"</td>"+"<td>"+message2+"</td></tr>");
// }
// else if(signalColor1==="green"){
//     document.write("<tr><td>"+signalColor1+"</td>"+"<td>"+message3+"</td></tr>");
// }
// else{
//     alert("Please enter correct color name");
// }
// document.write("</table>");


// Solved Q4
// var fuel = prompt("Enter remaining fuel")

// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else if(fuel > 0.25){
//     document.write("Fuel tank is full");
// }
// else{ 
//     document.write("Please enter fuel correctly");
// }


// solved Q5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// solved Q6
// var markObtain1 = +prompt("Enter Subject-1 obtained marks");
// var markObtain2 = +prompt("Enter Subject-2 obtained marks");
// var markObtain3 = +prompt("Enter Subject-3 obtained marks");
// var totalMarks = +prompt("Enter total-marks");

// document.write("<h1>" + "Marks Sheet" + "</h1> <br>")
// document.write("Total Marks :" + " " + totalMarks + "<br>")
// document.write("Obtained Marks :" + " " + (markObtain1 + markObtain2 + markObtain3) + "<br>")
// document.write("Percentage :" + (markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks + "%" + "<br>")
// if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 80){
//     document.write("Grade :" +" "+"A-one" + "<br>")
//     document.write("Remarks :" +" "+"Excellent" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 70){
//     document.write("Grade :"+" "+"A" + "<br>")
//     document.write("Remarks :"+" "+"Good" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 60){
//     document.write("Grade :"+" "+"B" + "<br>")
//     document.write("Remarks :"+" "+"You need to improve" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks < 60){
//     document.write("Grade :"+" "+"Fail" + "<br>")
//     document.write("Remarks :"+" "+"Sorry" + "<br>")
// }
// else{
//     alert("Invalid Data")
// }


// Solved Q7
// var secretNum= 8;
// var secretNumUser= +prompt("Guess the secret number form 1 to 10");
// if(secretNum===secretNumUser){
//     alert("Bingo!")
// }
// if(secretNum=== ++secretNumUser){
//     alert("Close enough to the correct answer")
// }{}
// if(secretNum=== secretNumUser++){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Better luck next time")
// }


// Solved Q8
// var num= +prompt("Enter Your number");
// if(num % 3 === 0){
//     document.write("Your given number is divisible")
// }
// else {
//     document.write("Given number is not divisible")
// }


// Solved Q9
// var num= +prompt("Enter any number");
// if(num % 2 === 0){
//     document.write("Your given number is even")
// }
// else if(num % 1 === 0){
//     document.write("Your given number is odd")
// }
// else{
//     document.write("Please enter numbers!")
// }


// Solved Q10
// var temperature = +prompt("Enter temperture here")
// if( temperature >= 40){
//     document.write("It is too hot outside.")
// }
// else if( temperature >= 30){
//     document.write("The Weather today is Normal.")
// }
// else if( temperature >= 20){
//     document.write("Today’s Weather is cool.")
// }
// else if( temperature >= 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }


// Solved Q11
// var num1 = +prompt( "Enter any number");
// var num2 = +prompt("Enter any number");
// var opt = prompt("Expressions");
// if(opt === "*"){
//     document.write(num1*num2)
// }
// else if ( opt === "/"){
//     document.write(num1/num2)
// }
// else if ( opt === "-"){
//     document.write(num1-num2)
// }
// else if (opt === "+"){
//     document.write(num1+num2)
// }
// else if (opt === "%"){
//     document.write(num1%num2)
// }
// else{
//     alert("Please enter right expression")
// }

// Chapter 9 to 11 End here

