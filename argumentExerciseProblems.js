

// let sum = function(...arg) {

//   let sum = 0;
//   for (let i = 0; i < arg.length; i ++) {
//     sum += arg[i];
//   }
//   return sum;
// }

// Function.prototype.myBind = function(context) {

//   let bindArgs = Array.prototype.slice.call(arguments);
//   const func = this;
//   return function() {
//     let callArgs = Array.prototype.slice.call(arguments);
    

//    return func.apply(bindArgs.shift(), bindArgs.concat(callArgs))
//   }
// }

// Function.prototype.myBind = function(context, ...bindArgs) {

//   const func = this;
//   return function(...callArgs) {
//     return func.apply(context, bindArgs.concat(callArgs))
//   }
// }

// Function.prototype.myBind = function(context, ...bindArgs) {

//   return (...callArgs) =>  {
//     return this.apply(context, bindArgs.concat(callArgs))
//   }
// }

function curriedSum(numArgs) {
  let numbers = [];

  _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(el => {
        sum += el;
      })
      return sum;
    } else {
      return this;
    }
  }

  return _curriedSum;
}


Function.prototype.curry = function(numArgs) {
  const obj = this;
  const args = [];
  
  const _curry = function(someArg) {
    args.push(someArg);
    if (args.length < numArgs) {
      return _curry;
    } else {
      return obj(args)
    }
  }
  
  return _curry
}

const addAll = function(args) {
  let ans = 0; 

  args.forEach(el => {
    ans += el
  })

  return ans;
}

console.log(addAll.curry(3)(4)(5)(6));