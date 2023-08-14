// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (let i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }

function countPositivesSumNegatives(input) {
if (input ==null|| input > 0) {
  []
}

let postiveNum = 0
let negativeNum = 0
let newArr =[]
for (let i = 0;i < array.length;i++) {
  if (input[i] ==0) 
    continue
  else if(input[i]>0)
  postiveNum += input[i]
 
  else if(input[i]<0)
  negativeNum +=input[i]
  
}
newArr = newArr.push(postiveNum)
newArr = newArr.push(negativeNum)
console.log(newArr);

}
countPositivesSumNegatives(1,2,3,4,-1,-2,-3,-4)