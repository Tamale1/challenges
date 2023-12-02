function getCount(str) {
    let vCount = 0
   const vowels = ['a','e','i','o','u']
    for(let e of str){
      if(vowels.includes(e)){
        vCount++
      }
    }
     return vCount
   }
//    Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.\

function sayHello(name) {
    return `Hello, ${name}`
  }

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock



function removeExclamationMarks(s) {
    let newString = []
    s.split('').forEach(el=>{
      if(el !=='!'){
       newString.push(el)
      }
    })
   return newString.join('')

   }
//    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.