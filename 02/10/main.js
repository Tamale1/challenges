function countSheeps(sheep) {
    let count =0
    sheep.forEach(shp => shp ? count++ : count)
      return count
    }