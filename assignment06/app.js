
// CHAPTER 21 TO 25 (STRING METHODS)
// Solved Q1
// let firstName = prompt("Enter your first-name")
// let lastName = prompt("Enter your last-name")
// let fullName = firstName+" "+lastName
// document.write( "Hello!"+" "+fullName+" "+"Welcome!")


// Solved Q2
// let favMobile = prompt("Enter Your Favourite Mobile")
// let totalLength = favMobile.length
// document.write(`My favourite phone is : ${favMobile} <br> Length of string : ${totalLength}`)


// Solved Q3
// let countryName = "Pakistan"
// let indexPlace = countryName.indexOf("n")
// document.write(`String : ${countryName} <br> Index of 'n' : ${indexPlace} `)


// Solved Q4
// let str = "Hello world"
// let LastPlace = str.lastIndexOf("l")
// document.write(`String : ${str} <br> Index of 'l' : ${LastPlace} `)


// Solved Q5
// let country = "Pakistan"
// let countryChar = country.charAt(3)
// document.write(`String : ${country} <br> Character at Index 3: ${countryChar} `)


// Solved Q6
// let firstName = prompt("Enter your first-name")
// let lastName = prompt("Enter your Last-name")
// let fullname = firstName.concat(" "+lastName)
// document.write(fullname)


// Solved Q7
// let cityName = "Hyderabad"
// document.write("City :"+cityName+ "<br>")
// let replac = cityName.replace("Hyder","Islam")
// document.write("After Repalcement: "+replac)


// Solved Q8
// let message = "Ali and Sami are best friends. They play cricket and football together";
// document.write("Message :"+message+"<br>")
// let updateReplace = message.replace(/and/g,"&")
// document.write("After replacement message : "+updateReplace)


// Solved Q9
// let value = "472";
// document.write("Value: "+value +"<br>"+"Type: "+typeof value +"<br>")
// value = 472;
// document.write("Value: "+value +"<br>"+"Type: "+typeof value )


// Solved Q10
// let user = prompt("Enter any word")
// let convert = user.toUpperCase()
// document.write(`User input: ${user} <br> Upper case: ${convert}`)


// Solved Q11
// let user = prompt("Enter any word");
// let firstLatter = user.slice(0,1).toUpperCase();
// let remainLatter = user.slice(1).toLowerCase();
// let convert = firstLatter+remainLatter;
// document.write(`User input: ${user} <br> Title case: ${convert}`);


// SOlved Q12
// let num = 35.36
// document.write("Number: " +num+"<br>")
//  num = 35.36.toString().replace(".","")
// document.write("Result: " +num+"<br>")


// Solved Q13
// let userName = prompt("Enter your Name")
// let flag = false;
// for (let i = 0; i < userName.length; i++) {
//     var charCode = userName.charCodeAt(i)
//     flag = true
//     if (charCode == 33 || charCode == 44 ||charCode == 46 || charCode == 64) {
//         document.write("Please enter a valid username . Your user name contain special symbols "+ userName.charCodeAt(i))
//     }
// }
// if(flag==false) {
//     document.write(userName +" Accepted")
// }


// Solved Q14
// let userSearch = prompt("Welcome to ZAM bakery .What do you want to order.");
// let item = ["Cake", "Applepie", "Cookie", "Chips", "Paties"];
// let firstAlpha = userSearch.slice(0,1).toUpperCase();
// let remainAlpha = userSearch.slice(1).toLowerCase();
// let convert = firstAlpha+remainAlpha
// let flag = false
// for (let i = 0; i < item.length; i++) {
//     if (convert == item[i]) {
//     flag = true
//         document.write(`${convert} is available at index  ${item.indexOf(convert) } in our bakery ` )
//     }
// }
// if(flag==false){
//     document.write(`We are sorry .${convert} is not available in our bakery ` )
// }


// Solved Q15
// let password = prompt("Enter a password:");
// if(password.length < 6 || !isNaN(password.charCodeAt(0))) {
//     alert("Enter a valid password. It must contain at least 6 characters .Password can not begin with a number");
// }
// else{
//     alert("Password accepted!");
// }


// Solved Q16
// var uni = "University of Karachi";
// var wordsBreak = uni.split("").join("<br>");
// document.write(wordsBreak);


// Solved Q17
// let country = prompt("Enter any word","pakistan");
// let con = country.charAt(country.length-1);
// document.write("User input: "+country+"<br>");
// document.write("Last character of input: "+con);


// Solved Q18
// let sentence = "The quick brown fox jumps over the lazy dog";
// let wordToFind = "the";
// let words = sentence.split(" ");
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === wordToFind) {
//         count++;
//     }
// }
// document.write("Text: "+sentence+"<br>" + "There are "+count+" occurance(s) of word "+"'"+wordToFind+"'")

// CHAPTER 21 TO 25 END HERE!

// CHAPTER 25 TO 30 START HERE MATH METHODS

// Solved Q1
// let num = 3.45214
// document.write("Number: " + num+"<br>")
// let rounding = Math.round(num)
// document.write("Round of value : " + rounding+"<br>")
// let floring = Math.floor(num)
// document.write("floor value : " + floring+"<br>")
// let ceiling = Math.ceil(num)
// document.write("ceil value : " + ceiling+"<br>")


// Solved Q2
// let num = -2.673
// document.write("Number: " + num+"<br>")
// let rounding = Math.round(num)
// document.write("Round of value : " + rounding+"<br>")
// let floring = Math.floor(num)
// document.write("floor value : " + floring+"<br>")
// let ceiling = Math.ceil(num)
// document.write("ceil value : " + ceiling+"<br>")


// Solved Q3
// let num = -4;
// let convert = Math.abs(num)
// document.write("The value of " + num + " is " + convert + "<br>")
// num = 5;
// convert = Math.abs(num)
// document.write("The value of " + num + " is " + convert)


// Solved Q4
// let num ;
// let num2 ;
// let dice = Math.floor(Math.random(num) * 6)+1
// let dice2 = Math.floor(Math.random(num) * 6)+1
// document.write("Random dice value: " + dice + "<br>")
// document.write("Random dice value: " + dice2)


// Solved Q5
// let player1 = prompt("Enter player 1 name")
// let player2 = prompt("Enter player 2 name")
// let randomToss = Math.floor(Math.random(length) * 2) + 1
// if (randomToss === 1) {
//     document.write(player1 + " won the toss")
// } else {
//     document.write(player2 + " won the toss");
// }


// Solved Q6
// let randomNum = Math.random()*101;
// let num = Math.floor(randomNum)
// document.write(`Random number between 1 and 100: ${num}`)


// Solved Q7
// let text = prompt("Enter yoyr weight in kilogram")
// let userWeight = parseFloat(text);
// document.write(`The weight of user is ${userWeight} kilograms `);


// Solved Q8
// let text = prompt("Enter a number between 1 to 10");
// let userInput = parseInt(text);
// let secretNum = 7;
// let flag = false;
// for (let i = 1; i <= 10; i++) {
//     if (userInput === secretNum) {
//         flag = true;
//         alert("Congratulation you guess the secret number");
//         break;
//     }
// }
// if (flag === false) {
//     alert("Try again");
// }

// CHAPTER NO 25 TO 30 END HERE...

// CHAPTER NO 31 TO 34 START DATE METHODS ....

// Solved Q1
// let myDate  = new Date();
// document.write(myDate);


// Solved Q2
// let months = ["january","feburary","march","april","may","june","july","august","september","october","november","december"];
// let currentMonth = new Date().getMonth();
// document.write("Current Month: "+months[currentMonth]);


// Solved Q3
// let days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// let toDay = new Date().getDay();
// document.write("Today is "+days[toDay]);


// Solved Q4
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let toDay = prompt("Enter a day");
// let firstAlpha = toDay.slice(0,1).toUpperCase();
// let baqiAlpha = toDay.slice(1).toLowerCase();
// let userInp = firstAlpha+baqiAlpha;
// let check = false;
// for (let i = 0; i < days.length; i++) {
//     if (userInp === days[0]||userInp === days[6]) {
//         check = true;
//         document.write("It's Fun day")
//         break;
//     }
// }
// if (check === false) {
//     document.write("it's not a fun day")
// }


// Solved Q5
// let monthDays = new Date().getDate();
// let match = false;
// for (let i = 0; i < monthDays; i++) {
//     if (monthDays < 16) {
//         match = true
//         document.write("First fifteen days of the month")
//         break;
//     }
// }
// if (match===false) {
//         document.write("Last fifteen days of the month")
// }


// Solved Q6
// let currentDate = new Date();
// let dobMilli = new Date("january 1, 1970").getTime();
// let resultMilli = currentDate - dobMilli
// let convertToMilli = resultMilli / (1000*60);
// let dobMin = new Date("january 1, 1970").getTime();
// let resultMin = currentDate - dobMin
// let convertToMin = resultMin / (1000 * 60 * 60)
// document.write("Current Date: " + currentDate + "<br>" + "Elapsed millisecond since january 1,1970: " + convertToMilli + "<br>" +"Elapsed minute since january 1,1970: " + convertToMin + "<br>");


// Solved Q7
// let todayTime = new Date().getHours();
// if (todayTime < 12) {
//     document.write("It's AM");
// }
// else {
//     document.write("It's PM");
// }


// Solved Q8
// let laterDate = new Date('31 dec 2020');
// document.write("Later date: "+laterDate)


// Solved Q9
// let currentRamzan = new Date('10 Mar, 2024').getTime();
// let passedRamzan = new Date('18 jun 2015')
// let passedDays = currentRamzan-passedRamzan
// let con = passedDays / (1000 * 60 * 60 *24)
// document.write( Math.floor(con)+" days passed since 1st Ramadan, 2015" )


// Solved Q10
// let start = new Date('01 jan, 2015 22:50:16');
// let end = new Date('05 dec , 2015').getTime();
// let result = end - start
// let con = result / (1000 * 60)
// document.write(`On reference date: ${start}, <br>
// ${Math.floor(con)} seconds had passed since beginnig of 2015 `)


// Solved Q11
// let currentDate = new Date ('05 dec 2015 23:08:16');
// let since = new Date ('05 dec 2015 22:08:16');
// let  timeDiff = currentDate - since;
// let diffHrs = Math.floor(timeDiff/(1000*60*60));
// document.write(currentDate+"<br>"+diffHrs+ " Hour ago, "+since)


// Solved Q12
// let newDate = new Date ()
// let currentDate = new Date ();
// let currentYear = currentDate.getFullYear();
// let minusYears = 100;
// let resultYears = currentYear-minusYears;
// currentDate.setFullYear(resultYears);
// document.write (`Current year : ${newDate} <br>
// ${minusYears} years back, It was ${currentDate}`)


// Solved Q13
// let currentDate = new Date ().getTime();
// let dateOfBirth = new Date (prompt("Enter your date of birth"));
// let birthYear = new Date (dateOfBirth).getFullYear();
// let age = currentDate-dateOfBirth;
// let convertAge = age/(1000*60*60*24*365);
// document.write("Your age is "+Math.floor(convertAge)+"<br>"+"Your birth year is "+ birthYear);


// Solved Q14
// let userNAme = prompt("Enter your name");
// let totalUnit = prompt("Enter your units")
// let MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = new Date ().getMonth();
// let chargesPerUnit = 16;
// let lateFee = 350;
// let netAmount = totalUnit*chargesPerUnit;
// document.write(`
// <h1>K-Electric Bill</h1>
// Customer Name : ${userNAme}<br>
// Month : ${MonthNames[currentMonth]}<br>
// Number of unit : ${totalUnit}<br>
// Charges per unit : ${chargesPerUnit}<br><br>
// Net Amount payable (Within Due Date) : ${totalUnit*chargesPerUnit}.00<br>
// Late payment surcharge : ${lateFee}<br>
// Gross Amount Payable (after Due Date) : ${netAmount+lateFee}.00
// `)

// CHAPTER NO 31 TO 34 END HERE