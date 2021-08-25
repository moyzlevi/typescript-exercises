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
// exercise1();

function exercise2():void{
    let i:number = 0;
    while (i!=10) {
        i+=0.2;
        console.log(i);
    }
    console.log(i);
}
// exercise2();
// the result enters in a infinite loop because i never reaches ten

function min(a:number,b:number):number{
        if(a-b>0)return a;
        else return b;
}
// console.log(min(10,2));
// console.log(min(2,10));
// console.log(min(2,2));

function pow(a:number,b:number):number{
    if(b == 0) return 1;
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
}

// console.log(pow(2,5));