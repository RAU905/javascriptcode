// console.log("heloo world it is mmy vonsoe");

// // setTimeout( () => {
// //   console.log( a+b);
// // alert ("hi i am alert ")
// // console.log(sum(11,12))
// // }, 2000);
// // setInterval(() => {
// //   alert("hhi iam setinterval");
// // }, 2000);
// // setTimeout(sum, 2000, 11, 23);
// // const sum = (a, b) => {
// //   alert("i am  add");
// //   a + b;
// // };

// // setInterval(sum,3000,12185,2154)
// let b = document.getElementsByClassName("sss")[0];
// b.onclick = () => {
//   alert("hi iam am alerat ");
// };
// let x = function (e) {
//   alert("helloworld ");
// };
// let y = function (e) {
//   alert("hi ");
// };

// aws.addEventListener("click", x);
// aws.addEventListener("click", y);
// let a = prompt("enter any numebr");

// if (a == 123) {
//   aws.removeEventListener("click", x);
// }

// setInterval(async function () {
//   document.getElementsByClassName("#yello").classlist.toggle("yello");
// }, 1000);

// let a = new Date();
// console.log(a);
// let h = a.getHours;
// let m = a.getMinutes;
// let s = a.getSeconds;
// let d = a.getDate;
// console.log(h, m, s, d);

document.addEventListener("DOMContentLoaded", function (event) {
  realTime();
});

function realTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var date = date.getDate();
  // var month = date.getMonth();
  // var year = date.getyear();

  var halfday = "AM";
  halfday = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = update(hour);
  min = update(min);
  sec = update(sec);
  date = update(date);
  // month = update(month);
  // year = update(year);

  document.getElementById("h").innerText = hour;
  document.getElementById("m").innerText = min;
  document.getElementById("s").innerText = sec;
  document.getElementById("da").innerText = date;
  // document.getElementById("mo").innerText = month;
  // document.getElementById("ye").innerText = year;

  document.getElementById("ap").innerText = halfday;

  setTimeout(realTime, 1000);
}

function update(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

let promises = new Promise((resolve, reject) => {
  alert("hi iam alert under promises");
  resolve(44);
});

console.log("hi hello");
setTimeout(function () {
  console.log(" ggood evening ");
}, 1000);

console.log(" i am second after settimeout");
console.log(promises);

let p1 = new Promise((resolve, reject) => {
  resolve("value 1");
});

let p2 = new Promise((resolve, reject) => {
  resolve("value 2");
});
let p3 = new Promise((resolve, reject) => {
  resolve("value 3");
});

// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });

let promisea = Promise.all([p1, p2, p3]);
promisea.then((value) => {
  console.log(value);
});
