
// let step = 3;
// for (let i = 0; i < 1000; i += step) {
//  if (i > 10) {
//  break;
//  }
//  console.log(i);
// }

const myArray = [1,5,7];
for(let el in myArray){
 console.log(Number(el));
 el = Number(el) + 5;
 console.log(el);
}
console.log(myArray);
