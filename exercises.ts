//#1
//Print the even numbers defined on a interval begin,end
//use for and while loops
function exercise1(): void {
  let begin: number = 0;
  let end: number = 10;

  for (let i = begin; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  console.log("/=======WhileVersion=======/");
  let i: number = begin;
  while (i <= end) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}
exercise1();
// #2 What is happening in this function?
function exercise2(): void {
  let i: number = 0;
  while (i != 10) {
    i += 0.2;
    console.log(i);
  }
  console.log(i);
}
// exercise2();
// the result enters in a infinite loop because i never reaches ten

// #3 Write a function that returns the min between two number
function min(a: number, b: number): number {
  if (a - b > 0) return a;
  else return b;
}
// console.log(min(10,2));
// console.log(min(2,10));
// console.log(min(2,2));

// #4 Write two power functions, one with for and other with recursion
function pow(a: number, b: number): number {
  if (b == 0) return 1;
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

// console.log(pow(2,5));

function pow2(a: number, b: number): number {
  if (b == 0) return 1;
  return a * pow2(a, b - 1);
}

// #5 Write a function that returns the first letter in capital letter
function toFirstCapital(word: string): string {
  return word.replace(word[0], word[0].toLocaleUpperCase());
}

// console.log(toFirstCapital("anarchy"));

// #6 write a function that returns the max in an array
function getMax(arr: number[]): number {
  let max:number = 0;
  for(let i = 0; i<arr.length;i++){
      if(arr[i] > max) max = arr[i];
  }
  return max;
}

// #7 write a function that returns the presence of every number in a array
function presence(arr:number[]):Map<number,number>{
    let result = new Map<number,number>();

    arr.forEach((val:number,index:number)=>{
        let actual = val;
        let counter = 0;
        arr.forEach((v:number)=>{
            if(actual == v)counter++;
        })
        result.set(val,counter);
    })
    return result;
}

console.log(presence([2,2,2,3,4,5,6,7,8]));