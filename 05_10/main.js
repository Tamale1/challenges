function reverseLetters(str) {
    let letters = str.match(/[a-zA-Z]/g);
     //  console.log(letters);
    if (!letters) return str;

    let reversed = str
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
           //console.log(`on true: ${char}`);
          //console.log(`Letters: ${letters}`);
          return letters.pop();
        }
        console.log(`on false: ${char}`);
        return char;
      })
      .join("");

    return reversed;
  }

  let input = "a-bC-dEf=ghIj!!";
  reverseLetters(input);
  // console.log(result);


//if name starts with cap 'R' plays else does not paly
  function areYouPlayingBanjo(name) {
    // Implement me
    if(name[0].toLowerCase()=='r'){
     return name + " plays banjo" 
       
    }else {
  return name + " does not play banjo"
    }
   return name
  }