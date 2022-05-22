
       /////// * CHAPTER 35 TO 38 * ///////

// * Question No 01 Start * //

// function crt(){
//     var date = new Date();
//     document.write(date)
// }
// crt()

// * Question No 01 Completed * //

// * Question No 02 Start * //

// function myname() {
//     var firstName = "Shahzad "+" ";
//     var lastName = "Ali"
//     document.write(firstName+lastName) 
// }
// myname()

// * Question No 02 Completed * //

// * Question No 03 Start * //

// function value(num1,num2){
//     var value = num1+num2;
//     return value
// }
// var value = 3 + 6;
// document.write(value)

// * Question No 03 Completed * //

// * Question No 04 Start * //

// function add(){
//        var time = +prompt("how many value.......?")
//        var addvalue = 0;
//        for (var i =0; i < time; i++){
//               addvalue += +prompt("Enter any value"+(i +1))
//        }
// document.write(addvalue)
// }

// * Question No 04 Completed * //

// * Question No 05 Start * //

// function squr(num) {
//        var i;

//        for (i=0;i<=num;i++) {
//               var sum=0;
//               var i = i*i;
//               sum = i;
//        }

//        document.write("The sum of squares for number up to and including ");
// }
// var num = parseInt(prompt("Enter Your Number"));
// squr(num);

// * Question No 05 Completed * //

// * Question No 06 Start * //

// function factor(n){

//        if(n == 0 || n == 1){
//               return 1;
//        }else{
//               return n * factor(n-1);
//        }
// }
// var n = 4;
// ans = factor(n)
// document.write("The Factorial of " + n + " is " + ans);

// * Question No 06 Completed * //

// * Question No 07 Start * //

// function sum(){
//        var firtName = 1;
//        var SecNumber = document.getElementById('textSecondNumber').value;
//        alert(parseInt(firtName) + parseInt(SecNumber));
// }

// * Question No 07 Completed * //

// * Question No 08 Start * //

// function pythagorean(sid1, sid2){
//        return Math.sqrt(Math.pow(sid1, 2) + Math.pow(sid2, 2));
// }

// document.write(pythagorean(4, 3));

// * Question No 08 Completed * //

// * Question No 09 Start * //

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectsngle.");
// function area(length, width){
//        return length * width;
// }
// function perimeter(length, width) {
//        return 2*( length + width);
// }

// document.writeIn('The area of your rectangle is ' + area(length, width));
// document.writeIn('The perimeter of your rectangle is ' + perimeter(length, width));

// * Question No 09 Completed * //

// * Question No 10 Start * //

// function chechPalindrom(str) {
//        // find the length of a string
//        var len = String.length;

//        // Loop through half of the strig
//        for (var i = 0; i < len / 2; i++) {
              
//               // check if first and last string are same
//               if (String[i] !== String[len - 1 -i]) {
//                      return 'It is not a palindrome';
//               }
//        }
//        return 'It is a palindrom';
// }

// // take input
// var string = prompt('Enter a String: ');

// // call the function
// var value = chechPalindrom(string);
// document.write(value); 

// * Question No 10 Completed * //

//* Question No 11 Start * //

// function uppercase(str)
// {
//        var array1 = str.split(' ');
//        var newarray1 = [];

//        for (var x =0; x < array1.length; x++){
//               newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//        }
//        return newarray1.join(' ');
// }
// document.write(uppercase("The Quick Brown Fox"));

// * Question No 11 Completed * //

//* Question No 12 Start * //

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// * Question No 12 Completed * //

//* Question No 13 Start * //

// function char_count(str, letter)
// {
//        var letter_count = 0;
//        for (var position = 0; position < str.length; position++)

//        {
//               if (str.charAt(position) == letter)
//               {
//                      letter_count += 1;
//               }
//        }
//        return letter_count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

// * Question No 13 Completed * //

//* Question No 14 Start * //

// function calCircum(radius) {
//        var your = (Math.PI * radius) * 4;
//        document.write("The Circufrence is " + your + "." +"</br>" +"</br>")
// }
// function calArea(radius) {
//        var xyz = (Math.PI * radius) * radius;
//        document.write("The Area is " + xyz + ".");
// }

// calCircum(30);
// calArea(10);fm

// * Question No 14 Completed * //


              /////// * CHAPTER 35 TO 38 END * ///////
