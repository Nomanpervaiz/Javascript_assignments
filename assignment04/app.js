// CHAPTER 14 TO 16 (ARRAYS)

// Solved Q1
// var studentNames=[]
// console.log(studentNames);


// Solved Q2
// var studentNames=[""]
// console.log(studentNames);



// Solved Q3
// var studentNames=['sufiyan','ahsan','raza'];
// console.log(studentNames);


// Solved Q4
// var numbers=[10,20,30,40];
// console.log(numbers);


// Solved Q5
// var boolean=[true,false];
// console.log(boolean);


// Solved Q6
// var mixedValues = [true, false, 10, "Noman", 30, "Pervaiz"];
// console.log(mixedValues);


// Solved Q7
// document.write("<h2>"+"Qualification"+"<br>"+"</h2>");
// var availableEducation= ['1) SSC'+"<br>"+' 2) HSC'+"<br>"+'3) BCS'+"<br>"+'4) BS'+"<br>"+'5) BCOM'+"<br>"+'6) MS'+"<br>"+'7) M.Phil.'+"<br>"+'8) PhD'];
// document.write(availableEducation);


// Solved Q8
// var studentNames=['Sufiyan','Ahsan','Raza'];
// var studentScore=['300','420','250'];
// var totalMarks = 500;
// document.write("Score of"+" "+studentNames[0] +" "+"is"+" "+studentScore[0]+". "+"Percentage:"+" "+studentScore[0]*100/totalMarks+"%"+"<br>");
// document.write("Score of"+" "+studentNames[1] +" "+"is"+" "+studentScore[1]+". "+"Percentage:"+" "+studentScore[1]*100/totalMarks+"%"+"<br>");
// document.write("Score of"+" "+studentNames[2] +" "+"is"+" "+studentScore[2]+". "+"Percentage:"+" "+studentScore[2]*100/totalMarks+"%");


//Solved Q9 
// document.write("<h2>"+"Color Names."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// document.write(colorNames+"<br>");

// document.write("<h2>"+"a) Adding user color name in beginning."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// var userColor= prompt("Enter color you want to add at beginning");
// colorNames.unshift(userColor);
// document.write(colorNames);

// document.write("<h2>"+"b) Adding user color name in end"+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// var userColor= prompt("Enter color name you want to add at end.");
// colorNames.push(userColor);
// document.write(colorNames);

// document.write("<h2>"+"c) Adding two color names in beginning."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// var userColor= prompt("Enter color-one you want to add at beginning");
// colorNames.unshift(userColor);
// var userColor= prompt("Enter color-two you want to add at beginning");
// colorNames.unshift(userColor);
// document.write(colorNames);

// document.write("<h2>"+"d) Deleting the first color in Array."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// document.write(colorNames+"<br>");
// document.write("<b>"+"After Deleting first color in Array"+"</b>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// colorNames.shift();
// document.write(colorNames);

// document.write("<h2>"+"e) Deleting the last color in Array."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// document.write(colorNames+"<br>");
// document.write("<b>"+"After Deleting last color"+"</b>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// colorNames.pop();
// document.write(colorNames);

// document.write("<h2>"+"f) Adding user index positon & color in Array."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue"];
// var userIndex= +prompt("Enter index position");
// var userColor= prompt("Enter color you want to add");
// colorNames[userIndex]=userColor
// document.write(colorNames);
 
// document.write("<h2>"+"g) Deleting user chosen index positon & color in Array."+"</h2>"+"<br>");
// var colorNames=["Red","Green","Blue","Pink"];
// document.write(colorNames+"<br>");
// var userTarget= +prompt("Enter your target number in array");
// var userIndex= +prompt("Enter index numbers you want to delete");
// var colorNames=["Red","Green","Blue","Pink"];
// colorNames.splice (userTarget,userIndex)
// document.write(colorNames);

 
// Solved Q10
// var studentScores = [320,230,480,120];
// document.write("<b>"+"Scores Of Student :"+"</b>"+" "+studentScores+"<br>");
// studentScores.sort();
// document.write("<b>"+"Ordered Scores Of Student :"+"</b>"+" "+studentScores);


//Solved  Q11 
// document.write("Cities List :"+"<br>");
// var cities= ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write(cities+"<br>");
// var copy = cities.slice(2,4);
// document.write("<br>"+"Selected cities list :"+"<br>"+copy);


//Solved  Q12 
// document.write("Array:"+"<br>");
// var line=["This","is","my","cat"];
// document.write(line+"<br>"+"<br>");
// document.write("String:"+"<br>");
// var line=["This","is","my","cat"];
// var stringText = line.join(" ");
// document.write(stringText);


//Solved  Q13
// document.write("FIFO"+"<br>");
// document.write("Devices:"+"<br>");
// var devices=[];
// devices.push("Keyboard");
// devices.push ("Mouse");
// devices.push ("Printer");
// devices.push("Monitor");
// document.write(devices+"<br>");
// document.write("<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.shift();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.shift();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.shift();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.shift();
// document.write(returnValue+"<br>");
// document.write(deviveThree+"<br>");
// var returnValue = devices.shift();
// document.write(returnValue+"<br>");


// Solved Q14
// document.write("LIFO."+"<br>");
// document.write("Devices:"+"<br>");
// var devices=[];
// devices.unshift("Monitor");
// devices.unshift("Printer");
// devices.unshift("Mouse");
// devices.unshift("Keyboard");
// document.write(devices+"<br>");
// document.write("<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.pop();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.pop();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.pop();
// document.write(returnValue+"<br>");
// document.write("Out:"+"<br>");
// var returnValue = devices.pop();
// document.write(returnValue+"<br>");
// document.write(deviveThree+"<br>");
// var returnValue = devices.pop();
// document.write(returnValue+"<br>");


// Solved Q15
// var companies = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write (
//     `<select>
//     <option> Companies </option>
//     <option> ${companies[0]} </option>
//     <option> ${companies[1]} </option>
//     <option> ${companies[2]} </option>
//     <option> ${companies[3]} </option>
//     <option> ${companies[4]} </option>
//     <option> ${companies[5]} </option>
//     </select>`
// )

// Chapter No 14 to 16 End here!