/* CODEWARS 28/11/2021 JS FUNDAMENTALS*/

// 1 - transform a number into a string

function numberToString(num) {
	return num.toString();
}

// 2 - square every digit of a number

function squareDigits(num){
	return parseInt(num.toString().split("").map(x => x*x).join(""))
}

// 3 - sum of the two smallest num of an array

function sumTwoSmallestNumbers(numbers) {  
  min1 = Math.min(...numbers);
  for(let i = 0; i<numbers.length; i++) {
    if (numbers[i] == min1) {
      numbers.splice(i,1);
    }
  }
  return min1 + Math.min(...numbers);
}

// num decomposition into summation 

var summation = function (num) {
	let sum = 0;
	for (let i = 0; i <= num; i++){
	sum += i;
	}
  return sum;
}

const summationSecnd = num => num * (num + 1) / 2;

// keep hydrated

function litres(time) {
  return Math.trunc(time * 0.5);
}


// revers String

function solution(str){
  let strS = "";
  for (let i=str.length-1; i>=0; i--){
  strS += str[i];
  }
  return strS;
}

// FB likes

function likes(names) {
  if (names.length == 0){
	return "no one likes this";
  } else if (names.length == 1){
	return names[0] + " likes this";
  } else if (names.length == 2){
	return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3){
	return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
	return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}

// Dernier avant le gouter 5 kyu : move the zeros

var moveZeros = function (arr) {
  let arrSoluce = arr
    .slice()
    .filter(elt => elt !== 0);
  for (let i = 0; i < arr.filter(elt => elt === 0).length; i ++) {
    arrSoluce.push(0);
  }
  return arrSoluce;
}

var moveZerosSecnd = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

// Dernier avant le gouter c'est lui enfait : convert s int h:m:s

function humanReadable (seconds) {
  let h = 0;
  let m = 0;
  let s = 0;
  
  if (seconds < 60){
    s = seconds;
  } else if (seconds < 3600) {
    m = Math.trunc(seconds/60);
    s = seconds%60;
  } else {
    h = Math.trunc(seconds/3600);
    m = Math.trunc(seconds%3600/60);
    s = (seconds%3600)%60;
  }
  h<10 ? h = "0" + h : h;
  m<10 ? m = "0" + m : m;
  s<10 ? s = "0" + s : s;
  return h+":"+m+":"+s;
}

	// solution des autres
	
function humanReadableScnd(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
