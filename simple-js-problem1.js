// Question for mock test : find out the missing number 

// solve the problem

const input =[5,7,9,11,13,15,23] 
const output = 13

for(let i=0; i<input.length ; i++){
  let current = input[i];
  let next = current + 2;
  if(input [i + 1] === next) continue;
  else{
    console.log(next);
    console.log("raiyan");
    break;
  }
}
