        /////// * CHAPTER 31 TO 34 * ///////

// * Question No 01 Start * //

// var time = new Date();
// document.write(time);

// * Question No 01 Completed * //

// * Question No 02 Start * //

// var number = new Date();
// var number1 = number.getMonth();
// alert(number1);

// * Question No 02 Completed * //

// * Question No 03 Start * //

// var numd = new Date().toString();
// var num1 = numd.slice(0,3);
// alert(num1);

// * Question No 03 Completed * //

// * Question No 04 Start * //

// var myDate = new Date();
// var num1 = myDate.getDay();
// if(myDate.getDay() ==6 || myDate.getDay() ==0);

// alert('It`s Fun Day');
// document.write(num1);

// * Question No 04 Completed * //

// * Question No 05 Start * //

// var FD = new Date();
// var num2 = FD.setMonth();

// if (num2 === 15){
//     alert("First Fifteen Days of Month")
// }
// else{
//     alert("Last Days of The Month")
// }

// * Question No 05 Completed * //

// * Question No 06 Start * //

// var time = new Date();
// document.write("Current Date" + time + "</br>");

// var num1 = new Date();
// var num2 = num1.getTime();
// var num3 = num1.getMilliseconds();
// var num4 = num2+num3
// document.write("Elapsed Milliseconds Since January 1,1970:"+num4 + "</br>");

// var num5 = new Date();
// var num6 = num5.getTime();
// document.write("Elapsed Minutes Since January 1,1970:"+ num6);

// * Question No 06 Completed * //

// * Question No 07 Start * //

// var num = new Date();
// var time = num.getTime();

// if (time === "AM"){
//     alert("It`s AM")
// }
// else{
//     alert("It`s PM")
// }

// * Question No 07 Completed * //

// * Question No 08 Start * //

// var today = new Date();
// today.getDate(29);
// today.getMonth(10)
// today.getFullYear(2021)
// document.write("Later Date :" +today);

// * Question No 08 Completed * //

// * Question No 09 Start * //

// var pass = new Date();
// var time = pass.getTime();
// var now = new Date("Jun 18, 2015");
// var title = now.getTime();
// var dif = time - title;
// var flor = Math.floor(dif/(1000 * 60 *60*24) )

// document.write(flor + "Days Have Past Since 1st Ramadan , 2022")

// * Question No 09 Completed * //

// * Question No 10 Start * //

// var now = new Date().getTime();
// var para = new Date("june 20 ,2015").getTime();
// var sub = now - para
// document.write("On Reference Date" +new Date()+ " , </br> "+ sub + "Second had Passed Since Beginning 0f 2015");

// * Question No 10 Completed * //

// * Question No 11 Start * //

// var crt = new Date("May 14 , 2022");
// var hr = new Date("May 14 , 2022");

// document.write("Current date:" + crt + "</br>" + "I hour ago, it was " + hr);

// * Question No 11 Completed * //

// * Question No 12 Start * //

// var know = new Date("03/25/2015");
// var sec = new Date().getFullYear() -100;
// document.write("Current Date"+ know + "</br>"+ "100 Years back, it was"+ sec);

// * Question No 12 Completed * //

// * Question No 13 Start * //

// var Past = new Date(prompt('Enter Your Age Jan 20 , 1998'));
// var tim = Past.getTime();
// var now = new Date();
// var time = now.getTime();
// var dif = tim - time
// var flor = Math.floor(dif/(1000 * 60 *60*24*30*12) )
// document.write(flor + " is your age")

// * Question No 13 Completed * //

// * Question No 14 Start * //

// var user = prompt('Enter Your Name');
// var arr =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var mon = new Date().getMonth()
// var min = arr[mon]
// var numb = 410
// var numb2 = 16
// var Total = numb+numb2
// var late = Total + 70
// document.write("Customer Name : " + user +"</br>" + "Month : " + min +"</br>"+ "Number Of Unit :"+ numb + "</br>"+ "Charges Per Unit : " + numb2 + "</br> "+ "</br>" + "Net Amount Payable ( " + new Date().toLocaleDateString() +  "):</br> Late Payment Surchange : " + Total + "</br>"+ 'Gross Amount Payable After Due Date ( ' + new Date(14 / 22 ).toLocaleDateString(2022))

// * Question No 14 Completed * //

/////// * CHAPTER 31 TO 34 END * ///////


