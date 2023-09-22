// QUESTION 1 

// var arr = [[]];
// q2
//var arr = [[]];

// arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]];

//q3
// for (var i = 1; i<=10; i++) {
//     document.write(i+"<br>");
// }

// q4
// var a=+prompt("enter start of loop");
// var b=+prompt("length");

// for(var i=0;i<b;i++){
// document.write(a+"x"+i+"="+a*i+"<br>");
// }

//q5


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

//q6
// Counting
// var count = "Counting: ";
// for (var i = 1; i <= 15; i++) {
//   count += i;
//   if (i < 15) {
//     count += ", ";
//   }
// }
// document.write(count);

// // Reverse counting
// var revCounting = "Reverse counting: ";
// for (var i = 10; i >= 1; i--) {
//   revCounting += i;
//   if (i > 1) {
//     revCounting += ", ";
//   }
// }
// document.write(revCounting);

// // Even
// var even = "Even: ";
// for (var i = 0; i <= 20; i += 2) {
//   even += i;
//   if (i < 20) {
//     even += ", ";
//   }
// }
// document.write(even);


// // Odd
// var odd = "Odd: ";
// for (var i = 1; i <= 19; i += 2) {
//   odd += i;
//   if (i < 20) {
//     odd += ", ";
//   }
// }
// document.write(odd);

// // Series
// var series = "Series: ";
// for (var i = 2; i <= 20; i += 2) {
//   series += i + "k";
//   if (i < 20) {
//     series += ", ";
//   }
// }
// document.write(series);

//q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found=0;
// var B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i=0; i<A.length;i++)
// {
//     if (B==A[i])
//     {
//         document.write(B+" is available at index "+i+" in our bakery.");
//         break;
//     }
//     else{
//         found++;
//     }
//     if (found==A.length-1)
//     {
//         document.write("We are sorry. "+B+" is <b>not available</b> in our bakery.");
//     }
// }

//q8

// var A = [24, 53, 78, 91, 12];
// var large=A[0];

// for (var i = 0; i < A.length; i++) {
// if (large<A[i])
// {
//     large=A[i];
// }
// }
// document.write("Array items: "+A);
// document.write("<br>The largest number is "+large);

//q9
// var A = [24, 53, 78, 91, 12];
// var small=A[0];

// for (var i = 0; i < A.length; i++) {
// if (small>A[i])
// {
//     small=A[i];
// }
// }
// document.write("Array items: "+A);
// document.write("<br>The smallest number is "+small);

//q10
// for(var i=0;i<=100;i+=5){
//     document.write(i+",");
// }
  
  
//// CHAPTER 21-25

// QUESTION 1

// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName=fName+" "+lName;
// alert("Welcome "+fullName);

// QUESTION 2

// var favMobile = prompt("Please enter your favourite mobile phone model: ");
// document.write(favMobile + "<br>" + "Length of string: " + favMobile.length);

// QUESTION 3

// var word = "Pakistani";
// for (var i = 0; i < word.length; i++) {
// if (word[i]=="n")
// {
//     document.write("String: Pakistani"+"<br>Index of 'n': "+i);
// }
// }

// //q4

// var word="Hello World";
// for( var i=0;i<word.length;i++){
//     if(word[i]=="l"){
//         if(i==9){
//         document.write("Found at index ="+i);
//     }
// }
// }

//q5
// var word="Pakistani";
// for(var i=0;i<word.length;i++){
//     if(i==3){
//         document.write("Character at index"+i +"="+word[i]);
//     }
// }

//q6
// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName = fName.concat(" ", lName);
// alert("Welcome "+fullName);

//q7
// var str="Hyderabad";
// var res=str.replace("Hyder","Islam");
// document.write("New Value = "+ res);

//q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&");
// document.write(res);

//q9

// var string = "472";

// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");
// string= Number(string);
// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");

//q10

// var input = prompt("Enter an input: ");
// document.write("User input: "+input+"<br>");
// var nString = input.toUpperCase();
// document.write("Upper case: "+nString);

//q11
// var input = prompt("Enter an input: ");
// document.write("User input: " + input + "<br>");
// var nString = input.toLowerCase();
// document.write("Lowercase: " + nString);

//q12


// var num = 33.36;
// var string = num.toString().replace(".", "");
// document.write("Number: "+num+"<br>");
// document.write("Result: "+string);

