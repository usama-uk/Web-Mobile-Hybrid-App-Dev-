// Chp # 21-25 (STRING METHODS)

// 1
function c21task1() {
    firstName = [prompt("Enter your first name")];
    lastName = [prompt("Enter your last name")];
    fullName = [];
    for (i = 0; i < firstName.length; i++) {
        for (var j = 0; j < lastName.length; j++) {
            fullName.push(firstName[i] + " " + lastName[j]);
        }
    }
    alert(fullName);
}

//2
function c21task2() {
    favtPhone = prompt("Your favt mobile phone model?");
    document.write("My favorite phone is " + favtPhone);
    lengthOfString = favtPhone.length;
    document.write(" <br> Length of string: " + lengthOfString);
}

//3
function c21task3() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndex = prompt("Enter the particular alphabet you want to find from a word");
    document.write("<br> Index of " + "'" + particularIndex + "': " + string.indexOf(particularIndex));
}

// 4
function c21task4() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndex = prompt("Enter the particular alphabet you want to find from a word");
    document.write("<br> Last index of " + "'" + particularIndex + "': " + string.lastIndexOf(particularIndex));
}

//5
function c21task5() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndexChar = +prompt("Enter the particular index of alphabet from a word you want to print");
    document.write("<br> Character at index " + particularIndexChar + ": " + string.charAt(particularIndexChar));
}

//6
function c21task6() {
    firstName = prompt("Enter first name");
    lastName = prompt("Enter last name");
    alert(firstName + " " + lastName);
}

// 7
function c21task7() {
    firstWord = "Hyderabad";
    lastWord = "Islam";
    firstWordLast = firstWord.slice(5);
    document.write("City: " + firstWord);
    document.write("<br> After replacement: " + lastWord + firstWordLast);
}

//8
function c21task8() {
    message = "Ali and Sami are best friends. They play cricket and football together.";
    newMessage = message.replace(/and/g, "&");
    document.write("Original message: " + message);
    document.write("<br> Replaced message: " + newMessage);
}

//9
function c21task9() {
    number = prompt("Enter the string value you want to convert into a number", 472);
    convertedNumber = Number(number);
    document.write("Value: " + number + "<br> Type: " + typeof number + "<br> Value: " + convertedNumber + "<br> Type: " + typeof convertedNumber);
}

//10
function c21task10() {
    word = prompt("Enter the word you want to capitalize");
    wordCapital = word.toUpperCase();
    document.write("User Input: " + word);
    document.write("<br> Upper Case: " + wordCapital);
}

//11
function c21task11() {
    word = prompt("Enter the word in which you want to capitalize the first letter of");
    wordStart = word.slice(0, 1);
    wordStart = wordStart.toUpperCase();
    wordEnd = word.slice(1);
    wordEnd = wordEnd.toLowerCase();
    document.write("User Input: " + word);
    document.write("<br> Title Case: " + wordStart + wordEnd);
}

//12
function c21task12() {
    num = 35.36;
    num = num.toString();
    newNum = num.split('.').join("");
    document.write("Number: " + num);
    document.write("<br>");
    document.write("Result: " + newNum);
}

//13
function c21task13() {
    userNameCodes = [];
    userName = prompt("Enter your name");
    specialSymbol = ["@", ".", ",", "!"];
    for (i = 0; i < userName.length; i++) {
        userNameCodes[i] = userName[i].charCodeAt();
        if (userNameCodes[i] === 64 || userNameCodes[i] === 33 || userNameCodes[i] === 44 || userNameCodes[i] === 46) {
            alert("invalid username");
            break;
        }
    }
}
// //13 other method
// userName = prompt("Enter your name");
// specialSymbol = ["@", ".", ",", "!"];
// for (i = 0; i < userName.length; i++) {
//     for (j = 0; j < specialSymbol.length; j++) {
//         if (userName[i] === specialSymbol[j]) {
//             alert("please enter a valid username")
//             break;
//         }
//     }
// }

//14
function c21task14() {
    a = ["cake", "apple pie", "cookie", "chips", "patties"];
    order = prompt("Welcome to ABC bakery, What do you want to order sir/maam?");
    order = order.toLowerCase();
    findOrder = a.indexOf(order);
    if (findOrder == -1) {
        alert("We are sorry, " + order + " is not available in our bakery");
    }
    else {
        alert(order + " is available at index " + findOrder + " in our bakery");
    }
}

//15
function c21task15() {
    passwordCodes = [];
    password = prompt("Enter password");
    for (i = 0; i < password.length; i++) {
        passwordCodes[i] = password[i].charCodeAt();
    }
    if (passwordCodes[0] >= 48 && passwordCodes[0] <= 57) {
        alert("First letter should be an alphabet");
    }
    else if (password.length < 6) {
        alert("Password must be atleast 6 characters long");
    }
    console.log(passwordCodes);
    for (j = 0; j < password.length; j++) {
        if (passwordCodes[j] < 48 || (passwordCodes[j] > 57 && passwordCodes[j] < 65) || (passwordCodes[j] > 90 && passwordCodes[j] < 97) || passwordCodes[j] > 122) {
            alert("Password can only contain letters and numbers");
            break;
        }
    }
}

//16
function c21task16() {
    res = [];
    university = "University of Karachi ";
    res = university.split("");
    for (i = 0; i < res.length; i++) {
        document.write(res[i] + "<br>")
    }
}

//17
function c21task17() {
    userInput = prompt("Enter the word", "pakistan");
    lastChar = userInput.charAt(userInput.length - 1);
    document.write("User input: " + userInput + "<br> Last character of input: " + lastChar);
}

//18
function c21task18() {
    text = "The quick brown fox jumps over the lazy dog."
    text1 = text.toLowerCase();
    count = text1.split("the").length - 1
    document.write("Text: " + text);
    document.write("<br> There are " + count + " occurance(s) of the word 'the'. ")
}


// Chp # 26-30 (MATH METHODS)

//1
function c26task1() {
    integar = +prompt("Please enter a positive integar")
    if (integar < 0) {
        alert("please enter a positive number")
    }
    document.write("Number: " + integar)
    document.write("<br> Round off value: " + Math.round(integar))
    document.write("<br> Floor value: " + Math.floor(integar))
    document.write("<br> Ceil value: " + Math.ceil(integar))
}

//2
function c26task2() {
    integar = +prompt("Please enter a negative integar")
    if (integar > 0) {
        alert("please enter a negative number")
    }
    document.write("Number: " + integar)
    document.write("<br> Round off value: " + Math.round(integar))
    document.write("<br> Floor value: " + Math.floor(integar))
    document.write("<br> Ceil value: " + Math.ceil(integar))
}

//3
function c26task3() {
    number = +prompt("Please enter a number to take its absolute value");
    absValue = Math.abs(number);
    document.write("The absolute value of " + number + " is " + absValue);
}

//4
function c26task4() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 6) + 1);
    alert("Random dice value is " + randomNumber2)
}

//5
function c26task5() {
    randomNumber = Math.random();
    coinValue = Math.floor((randomNumber * 2) + 1)
    if (coinValue === 2) {
        alert(coinValue + " \n Random coin Value: Heads")
    }
    else if (coinValue === 1) {
        alert(coinValue + " \n Random coin Value: Tails")
    }
}

//6
function c26task6() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 100) + 1)
    alert("Random number between 1 and 100:\n" + randomNumber2)
}

//7

//8
function c26task8() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 10) + 1)
    userInput = +prompt("Enter the number between 1 to 100 to match from a stored random number")
    console.log(randomNumber2)
    if (userInput === randomNumber2) {
        alert("Congo! your number is matched from a secret number")
    }
    else if (userInput != randomNumber2) {
        alert("Try again!")
    }
}


// Chp # 31-34 (DATE METHODS)

//1
function c31task1() {
    rightNow = new Date()
    document.write(rightNow);
}

//2
function c31task2() {
    monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    now = new Date();
    theMonth = now.getMonth();
    nameOfMonth = monthNames[theMonth];
    document.write("Current Month: " + nameOfMonth);
}

//3
function c31task3() {
    rightNow = new Date()
    console.log(rightNow);
    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    theDay = rightNow.getDay();
    nameOfToday = dayNames[theDay]
    alert("Today is " + nameOfToday)
}

//4
function c31task4() {
    rightNow = new Date()
    console.log(rightNow);
    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    theDay = rightNow.getDay();
    nameOfToday = dayNames[theDay];
    if (theDay === 0 || theDay === 6) {
        alert("Today is funday!")
    }
    else {
        alert("Today is not a funday")
    }
}

//5
function c31task5() {
    rightNow = new Date()
    console.log(rightNow);
    days = rightNow.getDate();
    if (days < 16) {
        alert("First fifteen days of the month");
    }
    else {
        alert("Last days of the month")
    }
}

//6
function c31task6() {
    rightNow = new Date();
    document.write("Current Date: " + rightNow)
    time = rightNow.getTime();
    document.write("<br> Eclapse Millisecond since january 1,1970: " + time);
    timeInMinutes = (time / 1000) / 60
    document.write("<br> Eclapsed minutes since january 1,1970: " + timeInMinutes)
}

//7
function c31task7() {
    rightNow = new Date();
    console.log(rightNow)
    time = rightNow.getHours();
    console.log(time)
    if (time >= 6 && time >= 18) {
        alert("It's PM")
    }
    else {
        alert("It's AM")
    }
}

//8
function c31task8() {
    rightNow = new Date();
    document.write("Right Now: " + rightNow)
    rightNow.setMonth(11);
    rightNow.setDate(31);
    rightNow.setHours(00)
    laterDate = rightNow
    document.write("<br> Later Date: " + laterDate)
}

//9
function c31task9() {
    rightNow = new Date()
    date = new Date("April 25, 2020")
    msRightNow = rightNow.getTime();
    msDate = date.getTime();
    diff = msRightNow - msDate;
    dDiff = diff / (1000 * 60 * 60 * 24);
    dDiff = Math.floor(dDiff);
    document.write("1st Ramadan is on " + date)
    document.write("<br> " + dDiff + " days have passed since 1st Ramadan " + date.getFullYear())
}

//10
function c31task10() {
    rightNow = new Date()
    date = new Date("January 1, 2020")
    msRightNow = rightNow.getTime()
    msDate = date.getTime()
    diff = msRightNow - msDate
    dDiff = diff / 1000;
    dDiff = Math.floor(dDiff);
    document.write("Our reference date: " + rightNow)
    document.write("<br> " + dDiff + " seconds has been passed since the beginning of the year 2020")
}

//11
function c31task11() {
    rightNow = new Date()
    document.write("Current Date: " + rightNow)
    a = rightNow.getHours();
    rightNow.setHours(a - 1)
    document.write("<br> One hour ago, it was " + rightNow)
}

//12
function c31task12() {
    rightNow = new Date()
    document.write("Current Date: " + rightNow)
    a = rightNow.getFullYear();
    console.log(a)
    rightNow.setFullYear(a - 100)
    document.write("<br> Hundred years back, it was " + rightNow)
}

//13
function c31task13() {
    userAge = +prompt("Enter your age", 21)
    rightNow = new Date()
    a = rightNow.getFullYear()
    console.log(a)
    birthYear = a - userAge
    document.write("Your age is " + userAge)
    document.write("<br> Your birth year is " + birthYear)
}

//14
function c31task14() {
    document.write("<h1> <b> K.Electric Bill </b> </h1>")
    userName = prompt("Your good name please?")
    document.write("Customer's Name: " + userName)
    rightNow = new Date()
    currentMonth = rightNow.getMonth()
    console.log(currentMonth)
    monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    nameOfMonth = monthNames[currentMonth];
    document.write("<br> Current Month: " + nameOfMonth);
    noOfUnits = 410
    document.write("<br> Number of units: " + noOfUnits)
    chargesPerUnit = 16
    document.write("<br> Charges per unit: " + chargesPerUnit)
    netAmountPayable = noOfUnits * chargesPerUnit
    document.write("<br> Net Amount Payable(within Due Date): " + netAmountPayable)
    latePaymentSurcharge = 350
    document.write("<br> Late Payment Surcharge: " + latePaymentSurcharge)
    grossAmountPayable = netAmountPayable + latePaymentSurcharge
    document.write("<br> Gross Amount Payable(after Due Date): " + grossAmountPayable)
}


// Chp # 35-38 (FUNCTION)

//1
function c35task1() {
    function rightNow() {
        rightNow = new Date()
        document.write(rightNow)
    }
    rightNow()
}

//2
function c35task2() {
    function name(a, b) {
        a = prompt("Enter your first name?")
        b = prompt("Enter your last name?")
        alert("Welcome to my website " + a + " " + b)
    }
    name()
}

//3
function c35task3() {
    function add(a, b) {
        c = a + b
        return c
    }
    result = add((+prompt("Enter your first number?")), (+prompt("Enter your second number?")))
    alert(result)
}

//4
function c35task4() {
    function calculator(num1, operator, num2) {
        if (operator === '+') {
            c = num1 + num2
        }
        else if (operator === '-') {
            c = num1 - num2
        }
        else if (operator === '/') {
            c = num1 / num2
        }
        else if (operator === '*') {
            c = num1 * num2
        }
        return c;
    }
    result = calculator((+prompt("Enter your first number?")), (prompt("Enter operator?")), (+prompt("Enter your second number?")))
    alert(result)
}

//5
function c35task5() {
    function square(num) {
        num2 = num * num
        alert("your square argument is: " + num2)
    }
    square(+prompt("Enter the number you want to take square of"))
}

//6
function c35task6() {
    function factorial(num) {
        fact = 1
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        alert("Factorial of a given number is: " + fact)
    }
    factorial(+prompt("Enter the number you want to get factorial of"))
}

//7
function c35task7() {
    function counting(a, b) {
        for (i = a; i <= b; i++) {
            document.write(i + "<br>")
        }
    }
    counting((+prompt("Enter number from where you want to begin counting")), (+prompt("Enter number to where you want to print counting")))
}

//8
function c35task8() {
    function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(num) {
            squareOfNum = num * num
            return squareOfNum
        }
        baseSquare = calculateSquare(base)
        perpendicularSquare = calculateSquare(perpendicular)
        hypotenuseSquare = baseSquare + perpendicularSquare
        hypotenuse = Math.sqrt(hypotenuseSquare)
        hypotenuse = hypotenuse.toFixed(2)
        alert("Hypotenuse of the given base and perpendicular of right triangle is: " + hypotenuse)
    }
    calculateHypotenuse((+prompt("Enter base of righttriangle")), (+prompt("Enter perpendicular of righttriangle")))
}

//9
function c35task9() {
    function areaOfRectangle(width, height) {
        a = width * height
        alert("Area of rectangle is: " + a)
    }
    areaOfRectangle((+prompt("Enter width of rectangle")), (+prompt("Enter height of rectangle")))
}

//10
function c35task10() {
    function checkPalindrome(word) {
        check = "";
        for (i = word.length - 1; i >= 0; i--) {
            check += word[i];
        }
        if (check === word) {
            alert(word + " is palindrome word");
        }
        else {
            alert(word + " is not a palindrome word")
        }
    }
    checkPalindrome(prompt("Enter the word you want to check either palindrome or not"))
}

//11
function c35task11() {
    function titleCase(string) {
        wordStart = []
        wordEnd = []
        splitString = string.split(" ")
        for (i = 0; i < splitString.length; i++) {
            wordStart[i] = splitString[i].slice(0, 1);
            wordStart[i] = wordStart[i].toUpperCase();
            wordEnd[i] = splitString[i].slice(1);
            wordEnd[i] = wordEnd[i].toLowerCase();
        }
        document.write("User Input: " + string + "<br>" + "Title Case: ");
        for (j = 0; j < splitString.length; j++) {
            document.write(wordStart[j] + wordEnd[j] + " ");
        }
    }
    titleCase(prompt("Enter the string you want to make title case"))
}

// //12 wrong
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//     alert(strSplit[i])
//     alert(longestWord)
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function longestElement(string) {
//     j = 1
//     splitString = string.split(" ")
//     for (i = 0; i < splitString.length; i++) {
//         if (splitString[i].length > splitString[j].length) {
//             alert("The element at index " + i + " is of greates")
//         }
//         else if (splitString[j].length > splitString[i].length) {
//             alert("The element at index " + j + " is of greates")
//         }
//     }
// }
// longestElement(prompt("Enter the text in which you want to find the longest word"))


//13
function c35task13() {
    function checkLetterCount(string, letter) {
        text1 = string.toLowerCase();
        count = text1.split(letter).length - 1
        alert("There are " + count + " occurance(s) of the word " + letter)
    }
    checkLetterCount((prompt("Enter the text from where you want to count a letter occurances")), (prompt("Enter which letter occurance you want to count")))
}

//14
function c35task14() {
    radius = +prompt("Enter the radius of circle to calculate the circumference and area of circle")
    function calcCircumference(radius) {
        circumference = 2 * 3.12 * radius
        alert("The circumference is: " + circumference)
    }
    function calcArea(radius) {
        area = 3.12 * radius * radius
        alert("The area is: " + area)
    }
    calcCircumference(radius)
    calcArea(radius)
}
