//1st

function addOne(val){
    return val + 1;
   }
   function total(a, b, callback){
    const sum = a + b;
    return callback(sum);
   }
   console.log(total(4, 5, addOne));
   
   //3

   function checker(val) {
    return new Promise((resolve, reject) => {
    if (val > 5) {
    resolve("Ready");
    } else {
    reject(new Error("Oh no"));
    }
    });
   }
   checker(5)
    .then((data) => {console.log(data); })
    .catch((err) => {console.error(err); })
    .finally(() => { console.log("done");});

    // 4
    async function myFun() {
        return "Hello";
       }
       myFun().then(
        function(val) { console.log(val); },
        function(err) { conole.log(err); }
       )       