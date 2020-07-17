// // Chapter No 1 (Assignment 1-JavaScript)
// // 1
function c1task1() {
    alert("Welcome to My Website");
}

// // 2
function c1task2() {
    alert("Error! Please enter a valid password");
}

// // 3
function c1task3() {
    alert("Welcome to JS Land...\n Happy Coding!");
}

// // 4
function c1task4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding!");
}

// //5(run in console)
// alert("Hello! I can run JS through web my browser's console");

// // Chapter No 2 (Assignment 2-JavaScript)
// 1
function c2task1() {
    var username;
}

// 2
function c2task2() {
    var myName = "BariraNashal";
}

// 3
function c2task3() {
    var message;
    message = "Hello World";
    alert(message);
}

// 4
function c2task4() {
    var noOfStds = prompt("Enter Number of students");
    for (b = 1; b <= noOfStds; b++) {
        c = prompt("Student Name?");
        d = prompt("Student's age?");
        e = prompt("Student's field?");
        alert(c);
        alert(d);
        alert(e);
    }
}

// 5
function c2task5() {
    alert("PIZZA \nPIZZ \nPIZ \nPI \nP");
}

//6
function c2task6() {
    var email = "barirakhan1@gmail.com";
    alert("My email address is " + email);
}

//7
function c2task7() {
    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from a book " + book);
}

//8
function c2task8() {
    document.write("Yah ! I can write HTML content through JavaScript");
}

//9
function c2task9() {
    var f = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(f);
}

// Chapter No 3 (Assignment 3-JavaScript)
//1
function c3task1() {
    var age = 23;
    alert("I am " + age + " years old");
}

// 2
function c3task2() {
    var g = 14;
    alert("You have visited this site " + g + " times");
}

//3
function c3task3() {
    var birthYear = 1997;
    document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");
}

//4
function c3task4() {
    var visitorsName, productTitle, quantity;
    visitorsName = "John";
    productTitle = "T-Shirts";
    quantity = 5;
    document.write(visitorsName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store");
}

// Chapter No 4 (Assignment 4-JavaScript)
//1
function c4task1() {
    var h, i, j;
}

//2
function c4task2() {
    // var 1stnumber, +listen, -number two, thisis#than ;
    var $hello, _user2, my$work, i_info;
}

//3
function c4task3() {
    document.write("<h1>Rules for naming JS variables</h1> <br> Variable names can only contain letters, $, _ and numbers. For example: $my_1stVariable <br> Variables must begin with a letter, _ or $. For example $name, _name or name. <br> Variable names are case sensitive. <br> Variable names should not be JS keywords");
}

// Chapter No 5 (Assignment 5-JavaScript)
//1
function c5task1() {
    k = 3;
    l = 5;
    m = k + l;
    document.write("sum of " + k + " and " + l + " is " + m);
}

//2
function c5task2() {
    n = 3;
    o = 5;
    p = n * o;
    q = n - o;
    r = n / o;
    s = n % o;
    document.write("multiplication of " + n + " and " + o + " is " + p + "<br> Subtraction of " + n + " and " + o + " is " + q + "<br> Division of " + n + " and " + o + " is " + r + "<br> Modulus of " + n + " and " + o + " is " + s);
}

//3
function c5task3() {
    // a
    var t;
    // b
    document.write("Value after only variable declaration is: " + t);
    //c
    t = 5
    //d
    document.write("<br> Intial Value: " + t);
    //e
    t++;
    //f
    document.write("<br> Value after increment is: " + t);
    // g
    t = t + 7;
    //h
    document.write("<br> Value after addition is : " + t);
    //i
    t = t - 1;
    //j
    document.write("<br> Value after deccrement is: " + t);
    //k
    document.write("<br> The remainder is : " + t % 3);
}

//4
function c5task4() {
    var u = 600;
    u = u * 5;
    document.write("Total cost to buy 5 tickets to a movie is : " + u + " PKR");
}

//5
function c5task5() {
    var tablenumber = 4;
    document.write("<h2>Table of 4 </h2>");
    for (var multiplicationFactor = 1; multiplicationFactor <= 10; multiplicationFactor++) {
        result = tablenumber * multiplicationFactor;
        document.write("<br>" + tablenumber + " * " + multiplicationFactor + " = " + result);
    }
}

//6
function c5task6() {
    //a
    var celciusTemp = 25;
    //b
    var celciusToFarenheit = (celciusTemp * 9 / 5) + 32;
    document.write(celciusTemp + "oC is " + celciusToFarenheit + "oF <br>");
    //c
    var farenheitTemp = 70;
    //d
    var fahrenheitToCelcius = (farenheitTemp - 32) * 5 / 9;
    document.write(farenheitTemp + "oF is " + fahrenheitToCelcius + "oC");
}

//7
function c5task7() {
    priceOfItem1 = 650;
    priceOfItem2 = 100;
    orderedQuantityOfItem1 = 3;
    orderedQuantityOfItem2 = 7;
    shippingCharges = 100;
    finalpriceOfItem1 = priceOfItem1 * orderedQuantityOfItem1;
    finalpriceOfItem2 = priceOfItem2 * orderedQuantityOfItem2;
    totalCost = finalpriceOfItem1 + finalpriceOfItem2 + shippingCharges;
    document.write("Price of item 1 is " + priceOfItem1 + "<br> Qunatity of item 1 is " + orderedQuantityOfItem1 + "<br> Price of item 2 is " + priceOfItem2 + "<br> Qunatity of item 2 is " + orderedQuantityOfItem2 + "<br> Shipping Charges is " + shippingCharges + "<br> <br> Total cost of your order is " + totalCost);
}

//8
function c5task8() {
    totalMarks = 750;
    obtainedMarks = 620;
    percentage = (obtainedMarks / totalMarks) * 100;
    document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + obtainedMarks + "<br> Percentage: " + percentage + "%");
}

//9
function c5task9() {
    usDollar = 10;
    saudiRiyal = 25;
    currencyinPKR = (usDollar * 104.80) + (saudiRiyal * 28);
    document.write("Total Currency in PKR: " + currencyinPKR)
}

//10
function c5task10() {
    var v = (2 + 5 * 10) / 2;
    document.write(v);
}

//11
function c5task11() {
    document.write("<h2> Age Calculator </h2>")
    currentYear = 2020;
    birthYear = 1997;
    age = currentYear - birthYear;
    document.write("Current Year: " + currentYear + "<br> Birth Year: " + birthYear + "<br> Your age is : " + age);
}

//12
function c5task12() {
    document.write("<h2> The Geometrizer </h2>");
    radius = 20;
    circumference = 2 * 3.14 * radius;
    areaOfCircle = 3.14 * (radius * radius);
    document.write("Radius of a Circle: " + radius + "<br> The circumference is: " + circumference + "<br> The area is: " + areaOfCircle);
}

// 13
function c5task13() {
    var snackName = "chocolate chip";
    currentAge = 23;
    maxAge = 65;
    quantitySnackPerDay = 3;
    totalSnackYouEat = (maxAge - currentAge) * quantitySnackPerDay;
    document.write("You will need " + totalSnackYouEat + " to last you untill the ripe old age of " + maxAge);
}

// Chapter No 6-9 (Assignment 6-9-JavaScript)
//1
function c6task1() {
    w = prompt("Enter the number");
    document.write("The value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of ++a is: " + ++w);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of a++ is: " + w++);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of --a is: " + --w);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of a-- is: " + w--);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");
}

// 2
function c6task2() {
    var a = 2, b = 1;
    document.write("Expression is: --a  -  --b  +  ++b  +  b-- ");
    document.write("<br> at stage 1 --a : " + --a);
    // 2-1 = 1, a=1
    document.write("<br> at stage 2 --a  -  --b: " + (a - --b));
    //1   -   1-1 = 1 - 0 = 1, b=0 
    document.write("<br> at stage 3 --a - --b + ++b: " + (a - b + ++b));
    //1    +  0+1=1, b=1 , a=1
    // = 1 +    1  =  2
    document.write("<br> at stage 4 --a - --b + ++b + b--: " + (a - b + ++b + --b));
    // 2   + 1
    //3 , b=0 , a= 1
    var a = 2, b = 1;
    resultMathExp = --a - --b + ++b + b--;
    document.write("<br> Result is: " + resultMathExp);
}

//3
function c6task3() {
    goodName = prompt("Your Good Name Please?");
    document.write("Welcome " + goodName + " to our Website ");
}

//5
function c6task5() {
    inputTablenumber = prompt("Enter the number of table you want to print", 5);
    document.write("Table of " + inputTablenumber + "<br>");
    for (var factorMultiplication = 1; factorMultiplication <= 10; factorMultiplication++) {
        tableResult = inputTablenumber * factorMultiplication;
        document.write("<br>" + inputTablenumber + " * " + factorMultiplication + " = " + tableResult);
    }
}

//6
function c6task6() {
    subject1 = prompt("Enter Subject1 Name");
    subject2 = prompt("Enter Subject 2 Name");
    subject3 = prompt("Enter Subject 3 Name");
    totalMarksOfEachSbj = 100;
    subject1Marks = prompt("Enter Subject 1 marks");
    subject2Marks = prompt("Enter Subject 2 marks");
    subject3Marks = prompt("Enter Subject 3 marks");
    totalMarksOfAllSbj = totalMarksOfEachSbj * 3;
    obtainedMarksOfAllSbj = subject1Marks + subject2Marks + subject3Marks;
    subject1Percent = (subject1Marks / totalMarksOfEachSbj) * 100;
    subject2Percent = (subject2Marks / totalMarksOfEachSbj) * 100;
    subject3Percent = (subject3Marks / totalMarksOfEachSbj) * 100;
    totalPercent6 = (subject1Percent + subject2Percent + subject3Percent) / 3;
    document.write(" <b> Subject  &emsp;   Total Marks  &emsp;   Obtained Marks   &emsp;   Percentage </b>");
    document.write("<br>" + subject1 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject1Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject1Percent);
    document.write("<br>" + subject2 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject2Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject2Percent);
    document.write("<br>" + subject3 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject3Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject3Percent);
    document.write("<br>" + '&emsp;&emsp;&emsp;&emsp;&emsp;' + "<b>" + totalMarksOfAllSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + obtainedMarksOfAllSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + totalPercent6 + "</b>");
}

// Chapter No 9-11 (Assignment 9-11-JavaScript)
//1
function c9task1() {
    var cityName9 = prompt("Enter name of the city");
    if (cityName9 === "karachi" || "Karachi") {
        alert("Welcome to the city of lights");
    }
}

//2
function c9task2() {
    var gender9 = prompt("Enter Your Gender");
    if (gender9 == "male") {
        alert("Good Morning, Sir");
    }
    else if (gender9 == "female") {
        alert("Good Morning, Maam");
    }
}

//3
function c9task3() {
    var colrOfTrafficSignal = prompt("Enter the input color of traffic signal");
    if (colrOfTrafficSignal == "red" || colrOfTrafficSignal == "Red") {
        alert("Must stop");
    }
    else if (colrOfTrafficSignal == "yellow" || colrOfTrafficSignal == "Yellow") {
        alert("Ready to move");
    }
    else if (colrOfTrafficSignal == "green" || colrOfTrafficSignal == "Green") {
        alert("Move now");
    }
}

//4
function c9task4() {
    fuelInLitres = +(prompt("Enter remaning fuel in your car in litres"));
    if (fuelInLitres < 0.25) {
        alert("Please refill the fuel in your car");
    }
    else {
        alert("Your car fuel is ok");
    }
}

//5
function c9task5() {
    //a
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    } //true

    //b
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    } //false

    //c
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }  //true
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }  //true

    //d
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    } //true

    //e
    if (true) {
        alert("True");
    }  //true
    if (false) {
        alert("False");
    }

    //f
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

//6
function c9task6() {
    document.write("<h2> MarkSheet </h2>");
    marks1 = +prompt("Enter Marks of 1st Subject");
    marks2 = +prompt("Enter Marks of 2nd Subject");
    marks3 = +prompt("Enter Marks of 3rd Subject");
    oneSubjectMarks = +prompt("Total Marks per subject");
    totalObtainedMarks6 = marks1 + marks2 + marks3;
    totalMarksOfAllSbjs6 = oneSubjectMarks * 3;
    percentage6 = (totalObtainedMarks6 / totalMarksOfAllSbjs6) * 100;
    document.write("Total Marks: " + totalMarksOfAllSbjs6 + "<br>Marks Obtained: " + totalObtainedMarks6 + "<br>Percentage: " + percentage6 + "% <br>");
    if (percentage6 >= 80) {
        document.write("Grade: A-One <br> Remarks: Excellent")
    }
    else if (percentage6 >= 70) {
        document.write("Grade: A <br> Remarks: Good")
    }
    else if (percentage6 >= 60) {
        document.write("Grade: B <br> Remarks: You need to improve")
    }
    else if (percentage6 < 60) {
        document.write("Grade: Fail <br> Remarks: Sorry")
    }
}

//7
function c9task7() {
    secretNumber = 4;
    userGuessNumber = +prompt("Guess the secret number");
    if (userGuessNumber === 4) {
        alert("Bingo! Correct answer")
    }
    else if (userGuessNumber++ === 5) {
        alert("Close enough to the correct answer”.")
    }
}

//8
function c9task8() {
    userCheckDivisibleNumber = +prompt("Enter the number you want to check wheather divisble by 3 or not");
    remainder = userCheckDivisibleNumber % 3;
    if (remainder === 0) {
        alert("Number is divisible by 3");
    }
    else {
        alert("Number is not divisible by 3");
    }
}

//9
function c9task9() {
    userCheckEvenOdd = +prompt("Enter the number you want to check wheather even number or odd number")
    remainder9 = userCheckEvenOdd % 2;
    if (remainder9 === 0) {
        alert("Number is Even");
    }
    else if (remainder9 === 1) {
        alert("Number is Odd");
    }
}

//10
function c9task10() {
    tempt10 = +prompt("Enter the temperature.");
    if (tempt10 >= 40) {
        alert("Its too hot outside.");
    }
    else if (tempt10 >= 30) {
        alert("The weather today is normal.");
    }
    else if (tempt10 >= 20) {
        alert("Today's weather is cool.");
    }
    else if (tempt10 >= 10) {
        alert("OMG! Today's weather is so cool.");
    }
}

//11
function c9task11() {
    firstNumber = +prompt("Enter first nunber");
    secondNumber = +prompt("Enter second number");
    operator11 = prompt("Enter Operator");
    if (operator11 == '+') {
        result = firstNumber + secondNumber;
        alert(firstNumber + " + " + secondNumber + " = " + result);
    }
    else if (operator11 == '-') {
        result = firstNumber - secondNumber;
        alert(firstNumber + " - " + secondNumber + " = " + result);
    }
    else if (operator11 == '*') {
        result = firstNumber * secondNumber;
        alert(firstNumber + " * " + secondNumber + " = " + result);
    }
    else if (operator11 == '/') {
        result = firstNumber / secondNumber;
        alert(firstNumber + " / " + secondNumber + " = " + result);
    }
    else if (operator11 == '%') {
        result = firstNumber % secondNumber;
        alert(firstNumber + " % " + secondNumber + " = " + result);
    }
}

// Chapter No 12-13 (Assignment 12-13-JavaScript)
//1
function c12task1() {
    var userStringOrVar = prompt("Enter Number/Character you want to check Uppercase/Lowercase/number");
    if (userStringOrVar >= 65 && userStringOrVar <= 90) {
        alert("Given letter is capital letter");
    }
}

//2
function c12task2() {
    firstInt = +prompt("Enter first Int");
    secondInt = +prompt("Enter second Int");
    if (firstInt > secondInt) {
        alert(firstInt + " is larger than " + secondInt);
    }
    else if (secondInt > firstInt) {
        alert(secondInt + " is larger than " + firstInt);
    }
    else if (firstInt === secondInt) {
        alert("Both Integars are equal");
    }
}

//3
function c12task3() {
    userNumber = +prompt("Enter the number you want to check is positive, negative or zero");
    if (userNumber > 0) {
        alert(userNumber + " is positive number");
    }
    else if (userNumber < 0) {
        alert(userNumber + " is negative number");
    }
    else if (userNumber === 0) {
        alert(userNumber + " is equal to zero");
    }
}

//4
function c12task4() {
    checkVowelOrCons = prompt("Enter character you want to check");
    if (checkVowelOrCons === 'a' || checkVowelOrCons === 'e' || checkVowelOrCons === 'i' || checkVowelOrCons === 'o' || checkVowelOrCons === 'u') {
        alert(checkVowelOrCons + " is a vowel.");
    }
    else {
        alert(checkVowelOrCons + " is a consonant.")
    }
}

//5
function c12task5() {
    correctPassword = "tryagain";
    userPassowrd = prompt("Enter your password")
    if (userPassowrd == "") {
        alert("Enter password");
    }
    else if (userPassowrd === correctPassword) {
        alert("Correct! The password you entered matches the original password")
    }
    else {
        alert("Incorrect password")
    }
}

//6
function c12task6() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting);
    }
    else {
        greeting = "Good evening";
        alert(greeting);
    }
}

//7
function c12task7() {
    userInputTime = +prompt("Enter time in 24 hours clock format");
    if (userInputTime >= 0000 && userInputTime < 1200) {
        alert("Good Morning");
    }
    else if (userInputTime >= 1200 && userInputTime < 1700) {
        alert("Good Afternoon");
    }
    else if (userInputTime >= 1700 && userInputTime < 2100) {
        alert("Good Evening");
    }
    else if (userInputTime >= 2100 && userInputTime <= 2359) {
        alert("Good Night");
    }
}


// Chapter No 14-16 (Assignment 14-16-JavaScript)
//1
function c14task1() {
    var students = [];
}

//2 
function c14task2() {
    var students2 = {};
}

//3
function c14task3() {
    var stringArr = ["a", "b", "c"];
}

//4
function c14task4() {
    var numArr = [1, 2, 3];
}

//5
function c14task5() {
    var booleanArr = [true, false, false, true];
}

//6
function c14task6() {
    var mixedArr = ["she1", "bia2", 12];
}

//7
function c14task7() {
    availableEduPak = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.Phil.", "PhD"];
    document.write("<h2> Qualifications </h2> <br> 1) " + availableEduPak[0] + "<br> 2) " + availableEduPak[1] + "<br> 3) " + availableEduPak[2] + "<br> 4) " + availableEduPak[3] + "<br> 5) " + availableEduPak[4] + "<br> 6) " + availableEduPak[5] + "<br> 7) " + availableEduPak[6] + "<br> 8) " + availableEduPak[7]);
}

//8
function c14task8() {
    stdNames = ["std1", "std2", "std3"];
    scroreOfStds = [320, 230, 480];
    totalMarksForEachStd = 500;
    for (x = 0; x <= scroreOfStds.length - 1; x++) {
        var percentageOfStds = (scroreOfStds[x] / totalMarksForEachStd) * 100;
        document.write("Score of " + stdNames[x] + " is " + scroreOfStds[x] + ". Percentage: " + percentageOfStds + "% <br>");
    }
}

//9
function c14task9() {
    colrNames = ["Red", "Green", "Blue"];
    document.write("<b> Main Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        console.log(colrNames[x] + "<br>");
        document.write(colrNames[x] + "<br>");
    }
    //a
    userAddedColr = prompt("Enter the colour you want to add at the beginning of the list");
    colrNames.unshift(userAddedColr);
    document.write("<b> Beginning Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        console.log(colrNames[x] + "<br>");
        document.write(colrNames[x] + "<br>");
    }
    //b
    userAddedColr2 = prompt("Enter the colour you want to add at the last of the list");
    colrNames.push(userAddedColr2);
    document.write("<b> Last Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //c
    var userAddedColr3 = [];
    quantityOfColrAddBeginning = +prompt("How many colours you want to add at the beginning?");
    for (y = 0; y < quantityOfColrAddBeginning; y++) {
        userAddedColr3[y] = prompt("Enter the " + (y + 1) + " colour you want to add at the beginning of the list");
        colrNames.splice(y, 0, userAddedColr3[y]);
    }
    console.log(userAddedColr3);
    console.log(colrNames);
    document.write("<b> More than one Beginning Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //d
    colrNames.shift();
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //e
    colrNames.pop();
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //f
    indexNumberDesiredToAddMoreThanOneInBetwenArr = [];
    userAddedColr4 = [];
    quantityOfColrAddBetweenArr = +prompt("How many colours you want to add?");
    if (quantityOfColrAddBetweenArr > 1) {
        for (aa = 0; aa < quantityOfColrAddBetweenArr; aa++) {
            indexNumberDesiredToAddMoreThanOneInBetwenArr[aa] = +prompt("At what index number you want to add " + (aa + 1) + " element")
            userAddedColr4[aa] = prompt("Enter the colour you want to add at index number " + (aa + 1));
            colrNames.splice(indexNumberDesiredToAddMoreThanOneInBetwenArr[aa], 0, userAddedColr4[aa])
        }
        console.log(userAddedColr4);
        console.log(colrNames);
        for (x = 0; x < colrNames.length; x++) {
            document.write(colrNames[x] + "<br>");
        }
    }
    else {
        userDesiredIndex = +prompt("At what index number (starting from 0), you want to add a color?");
        userAddedColr4 = prompt("Enter the colour you want to add");
        for (z = 0; z < quantityOfColrAddBetweenArr; z++) {
            colrNames.splice(userDesiredIndex, 0, userAddedColr4[z]);
        }
        console.log(userAddedColr4);
        console.log(colrNames);
        for (x = 0; x < colrNames.length; x++) {
            document.write(colrNames[x] + "<br>");
        }
    }
    //g
    quantityOfDeletedColors = +prompt("How many colors you want to delete?");
    indexNumsOfDeletedColors = prompt("Enter the index number (starting from 0), you want to delete");
    colrNames.splice(indexNumsOfDeletedColors, quantityOfDeletedColors)
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
}

//10
function c14task10() {
    stdsScoreUnsorted = [];
    noOfStds = +prompt("Enter the number of students");
    //storing input from user and displaying unsorted array
    document.write("<b> Unsorted Array </b> <br>");
    for (bb = 0; bb < noOfStds; bb++) {
        stdsScoreUnsorted[bb] = +prompt("Enter the score of " + (bb + 1) + " Student");
        console.log("Std" + (bb + 1) + " score is " + stdsScoreUnsorted[bb] + "\n");
        document.write("Std " + (bb + 1) + " score is: " + stdsScoreUnsorted[bb] + "<br>");
    }
    console.log(stdsScoreUnsorted)
    for (cc = 0; cc < noOfStds; cc++) {
        for (dd = (cc + 1); dd < noOfStds; dd++) {
            if (stdsScoreUnsorted[cc] > stdsScoreUnsorted[dd]) {
                temp10 = stdsScoreUnsorted[cc];
                stdsScoreUnsorted[cc] = stdsScoreUnsorted[dd];
                stdsScoreUnsorted[dd] = temp10;
            }
        }
    }
    console.log(stdsScoreUnsorted);
    document.write("<b> Sorted Array </b> <br>")
    for (ee = 0; ee < noOfStds; ee++) {
        document.write("Std " + (ee + 1) + " score is: " + stdsScoreUnsorted[ee] + "<br>");
    }
}

//11
function c14task11() {
    cityNames = [];
    quantityOfCityNames = +prompt("How many cities you want to add");
    document.write("<b> Full Array </b> <br> ");
    for (ff = 0; ff < quantityOfCityNames; ff++) {
        cityNames[ff] = prompt("Enter the " + (ff + 1) + " city name");
        console.log(cityNames[ff])
        document.write(ff + ") " + cityNames[ff] + "<br>");
    }
    console.log(cityNames);
    StartCityIndexNos = +prompt("From where you want to copy elements to new array? Write index no(Starting from 0)");
    console.log(StartCityIndexNos);
    EndCityIndexNos = +prompt("To where you want to copy elements to new array? Write index no(Starting from 0)");
    console.log(EndCityIndexNos);
    EndCityIndexNos++;
    copiedCityNames = cityNames.slice(StartCityIndexNos, EndCityIndexNos);
    console.log(copiedCityNames);
    document.write("<br> <b> Copied Elements from array </b> <br> ")
    for (ff = 0; ff < EndCityIndexNos - 1; ff++) {
        document.write(ff + ") " + copiedCityNames[ff] + "<br>");
    }
}

//12
function c14task12() {
    var arr12 = ["This", "is", "my", "cat"];
    document.write("<b> Array </b> <br>");
    for (gg = 0; gg < arr12.length; gg++) {
        document.write(arr12[gg] + ",")
    }
    document.write(" <br> <b> String </b> <br>");
    for (gg = 0; gg < arr12.length; gg++) {
        document.write(arr12[gg] + " ")
    }
}

//13
function c14task13() {
    arr14 = [];
    var arr13 = ["Keyboard", "Mouse", "Printer", "Monitor"];
    document.write("<b> Devices: </b> <br>");
    for (hh = 0; hh < arr13.length; hh++) {
        document.write(arr13[hh] + ",")
    }
    for (hh = 1; hh <= arr13.length; hh++) {
        for (ii = 0; ii < hh; ii++) {
            arr14[hh] = arr13.slice(ii, hh);
        }
        document.write("<br> <b> Out: </b>");
        console.log(arr14[hh])
        document.write("<br>" + arr14[hh])
    }
}

// //13 Other method
// function c14task13() {
// arr16 = [];
// arr15 = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<b> Devices: </b> <br>");
// for (hh = 0; hh < arr15.length; hh++) {
//     document.write(arr15[hh] + ",")
// }
// console.log(arr15.length);
// console.log(arr15)
// for (hh = 0; hh <= arr15.length; hh++) {
//     arr16[hh] = arr15.shift();
//     console.log(arr15);
//     document.write("<br> <b> Out: </b>");
//     document.write("<br>" + arr16[hh])
//     console.log(arr16);
// }
// }

//14
function c14task14() {
    arr16 = [];
    arr15 = ["Keyboard", "Mouse", "Printer", "Monitor"];
    document.write("<b> Devices: </b> <br>");
    for (hh = 0; hh < arr15.length; hh++) {
        document.write(arr15[hh] + ",")
    }
    console.log(arr15.length);
    console.log(arr15)
    for (hh = 0; hh <= arr15.length; hh++) {
        arr16[hh] = arr15.pop();
        console.log(arr15);
        document.write("<br> <b> Out: </b>");
        document.write("<br>" + arr16[hh])
        console.log(arr16);
    }
}

//15
function c14task15() {
    arr17 = ["Apple", "Samsung", "Motrolla", "Sony", "Haier"];
    console.log(arr17);
    document.write(`<select> <option>${arr17[0]}</option> <option>${arr17[1]}</option> <option>${arr17[2]}</option> <option>${arr17[3]}</option> <option>${arr17[4]}</option> </select>`);
}

// Chapter No 17-20 (Assignment 17-20-JavaScript)
//1
function c17task1() {
    var arr = new Array(3);
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = new Array(3);
    }
    console.log(arr);
}

//2
function c17task2() {
    arr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
    for (kk = 0; kk < arr2.length; kk++) {
        document.write(arr2[kk] + "<br>")
    }
}

//3
function c17task3() {
    for (kk = 1; kk <= 10; kk++) {
        document.write(kk + "<br>")
    }
}

//4
function c17task4() {
    tableNo4 = +prompt("Enter the table number you want to print");
    tableCount4 = +prompt("Enter the number to where you want to print the table of " + tableNo4 + "<br>");
    document.write("Table of " + tableNo4 + " till " + tableCount4);
    for (ll = 1; ll <= tableCount4; ll++) {
        multiplyFactor4 = tableNo4 * ll;
        document.write("<br>" + tableNo4 + " * " + ll + " = " + multiplyFactor4);
    }
}

//5
function c17task5() {
    fruitNames = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
    for (mm = 0; mm < fruitNames.length; mm++) {
        document.write(fruitNames[mm] + "<br>")
    }
    document.write("<br>")
    for (mm = 0; mm < fruitNames.length; mm++) {
        document.write("Element at index " + mm + " is " + fruitNames[mm] + "<br>")
    }
}

//6
function c17task6() {
    document.write("<b>Counting:</b>");
    for (kk = 1; kk <= 15; kk++) {
        document.write(" " + kk + " ")
    }
    document.write("<br> <b>Reverse Counting:</b>");
    for (kk = 10; kk >= 1; kk--) {
        document.write(" " + kk + " ")
    }
    document.write("<br> <b>Even:</b>");
    for (kk = 0; kk <= 20; kk++) {
        temp = kk % 2;
        if (temp === 0) {
            document.write(" " + kk + " ")
        }
    }
    document.write("<br> <b>Odd:</b>");
    for (kk = 0; kk <= 20; kk++) {
        temp = kk % 2;
        if (temp === 1) {
            document.write(" " + kk + " ")
        }
    }
    document.write("<br> <b>Series:</b>");
    for (kk = 2; kk <= 20; kk = kk + 2) {
        document.write(" " + kk + "k" + " ")
    }
}

//7
function c17task7() {
    arr7 = ["cake", "apple pie", "cookie", "chips", "patties"];
    searchItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
    searchItem2 = searchItem.toLowerCase();
    elementIndex = arr7.indexOf(searchItem2);
    for (ll = 0; ll < arr7.length; ll++) {
        if (searchItem2 === arr7[ll]) {
            alert(searchItem + " is available at index " + elementIndex + " in our bakery");
        }
    }
    if (elementIndex === (-1)) {
        alert("We are sorry! " + searchItem + " is not available in our bakery");
    }
}

//8
function c17task8() {
    mm = 0
    arr8 = [24, 53, 91, 78, 12];
    document.write("Array items: " + arr8);
    if (arr8[mm] > arr8[mm + 1] && arr8[mm] > arr8[mm + 2] && arr8[mm] > arr8[mm + 3] && arr8[mm] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm]);
    }
    else if (arr8[mm + 1] > arr8[mm] && arr8[mm + 1] > arr8[mm + 2] && arr8[mm + 1] > arr8[mm + 3]) {
        document.write("<br> The largest number is: " + arr8[mm + 1]);
    }
    else if (arr8[mm + 2] > arr8[mm] && arr8[mm + 2] > arr8[mm + 1] && arr8[mm + 2] > arr8[mm + 3] && arr8[mm + 2] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm + 2]);
    }
    else if (arr8[mm + 3] > arr8[mm] && arr8[mm + 3] > arr8[mm + 1] && arr8[mm + 3] > arr8[mm + 2] && arr8[mm + 3] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm + 3]);
    }
    else if (arr8[mm + 4] > arr8[mm] && arr8[mm + 4] > arr8[mm + 1] && arr8[mm + 4] > arr8[mm + 2] && arr8[mm + 4] > arr8[mm + 3]) {
        document.write("<br> The largest number is: " + arr8[mm + 4]);
    }
}

//9
function c17task9() {
    mm = 0
    arr8 = [24, 53, 78, 91, 12];
    document.write("Array items: " + arr8);
    if (arr8[mm] < arr8[mm + 1] && arr8[mm] < arr8[mm + 2] && arr8[mm] < arr8[mm + 3] && arr8[mm] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm]);
    }
    else if (arr8[mm + 1] < arr8[mm] && arr8[mm + 1] < arr8[mm + 2] && arr8[mm + 1] < arr8[mm + 3]) {
        document.write("<br> The smallest number is: " + arr8[mm + 1]);
    }
    else if (arr8[mm + 2] < arr8[mm] && arr8[mm + 2] < arr8[mm + 1] && arr8[mm + 2] < arr8[mm + 3] && arr8[mm + 2] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm + 2]);
    }
    else if (arr8[mm + 3] < arr8[mm] && arr8[mm + 3] < arr8[mm + 1] && arr8[mm + 3] < arr8[mm + 2] && arr8[mm + 3] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm + 3]);
    }
    else if (arr8[mm + 4] < arr8[mm] && arr8[mm + 4] < arr8[mm + 1] && arr8[mm + 4] < arr8[mm + 2] && arr8[mm + 4] < arr8[mm + 3]) {
        document.write("<br> The smallest number is: " + arr8[mm + 4]);
    }
}

//10
function c17task10() {
    for (kk = 1; kk <= 100; kk++) {
        temp = kk % 5;
        if (temp === 0) {
            document.write(" " + kk + " ")
        }
    }
}