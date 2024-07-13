function cumulativeAddition(array){
     let total = array.reduce(function(prev, current){
          return prev + current
     })
     let arr = [total, array.length]
     return arr
}
