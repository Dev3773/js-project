// const arr = [7, 'hello', null, true, undefined, [1, 2, 3]];

// for (let i = 0; i < arr.length; i += 1) {
  //   if (Array.isArray(arr[i])) {
    //     for (let j = 0; j < arr[i].length; j += 1) {
      //       console.log(arr[i][j]);
      //     }
      //     continue;
      //   }
      //   console.log(arr[i]);
      // }
      
      // for (const a of arr) {
        //   console.log(a);
        // }
        
        // const str = "I like JS";
        // console.log(str);
        
        // const arr = str.split(' ');
        // console.log(arr);
        
        // const str2 = arr.join(' ')
        // console.log(str2);
        
        // const x = arr.slice(2, 5);
        // console.log(arr);
        // console.log(x);
        
        // const arr3 = arr.concat(arr2, ["fjjdjdjd"]);
        // console.log(arr3);
        
// const arr2 = [777, 555, 888, 'vasya', null, true, undefined];
// console.log(arr2);
// console.log(arr2.splice(0, 0,'Petya'));
// console.log(arr2);

// ---------- Function ------------ 

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// function multiply(...a) {
//   console.log(Array.isArray(a));
//   console.log("rest - " + a);

//   let total = 1;
//   let arr = [];
//   for (const argument of arguments) {
//     arr.push(argument);
//   }

//   return arr;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


 function fun(ammount, balance) {
  if (ammount > balance) {
    console.log('Ammount more than balance');
    return;
  }

  if (ammount === balance) {
    console.log('Ammount equals balance');
    return;
  }

  if (ammount < balance) {
    console.log('Ammount less than balance');
    return;
  }
}

console.log(fun(100, 100));