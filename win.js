// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1111);
//   }, 1000);
// });
// try {
//   console.log(tom);
// } catch (er) {
//   console.log(" your error is " + er);
// }
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(222);
//   }, 8000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3333);
//   }, 2000);
// });
// let y = prompt(" enter your age ");
// y = Number.parseInt(y);
// if (y > 190) {
//   try {
//     throw new Error(" it is ");
//   } catch (err) {
//     console.log(" the erroe is :-" + err);
//     console.log(" the erroe is :-" + err.name);

//     console.log(" the erroe is :-" + err.message);
//     console.log(" the erroe is :-" + err.stack);
//   }
// } else {
//   console.log(" yes your age is valid");
// }

// let loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src);
//       console.log(" your script is " + src);
//     };
//     document.head.append(script);
//   });
// };
// let helo = async () => {
//   let a = await loadscript(
//     "https://drive.google.com/drive/folders/18_zQbPP3VgdK81Yl_WpFaH2OVKTxPzN0"
//   );
//   console.log(a);
// };
// helo().then(alert(" yes you have done"));

// let du = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error(" this is an error "));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await du();
//     console.log(c);
//   } catch (err) {
//     console.log(" your error is " + err);
//   }
// };

// a().then(alert(" donne it is "));

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am p1");
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am p2");
    }, 3000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am p3");
    }, 4000);
  });
};

const fun2 = async () => {
  console.time("fun2");

  let a = await p1();
  console.log(a);

  let b = await p2();
  console.log(b);

  let c = await p3();
  console.log(c);
  // let a = p1();
  // let b = p2();
  // let c = p3();

  // let d = await Promise.all([a, b, c]);
  // console.log(d);
  // let d = await Promise.all([a, b, c]);
  // console.log(d);

  console.timeEnd("fun2");
};

fun2();

// p1.then(console.log(" p1 done"));
// let a = await p1();
// console.log(a);

// let b = await p2();
// console.log(b);

// let c = await p3();
// console.log(c);
// p1.then(console.log(" p1 done"));
