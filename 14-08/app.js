
//volume of the cuboid

class Kata {
    static getVolumeOfCuboid(length, width, height) {
     let vol  = length*width*height
     return vol
    }
  }


  //multiplication of array elements

  function grow(x){
    let product = 1
  for(let i=0; i < x.length; i++){
    product*= x[i]
  }
    return product
  }