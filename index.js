fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // for(let i = 0; i < collection.length; i++){
      //   if(Array.isArray(collection)){
      //     callback(collection[i], i, collection)
      //   }
      // }
      for(i in collection){
        callback(collection[i], i, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArray = []
      // for(let i = 0; i < collection.length; i++){
      //   if(Array.isArray(collection)){
      //     newArray.push(callback(collection[i], i, collection));
      //   }
      // }
      for(i in collection){
        newArray.push(callback(collection[i], i, collection));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc = 0) {
      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate){
      for(i in collection){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate){
      const newArray = []
      for(i in collection){
        if(predicate(collection[i])){
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection){
      let count = 0
      for(i in collection){
        count++
      }
      return count
    },

    first: function(array, n){
      if(n){
        return array.slice(0, n)
      } else{
        return array[0]
      }
    },

    last: function(array, n){
      if(n){
        return array.slice(array.length - n, array.length)
      } else{
        return array[array.length - 1]
      }
    },

    compact: function(array){
      const newArray = []
      for(i in array){
        if(array[i]){
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback){
      return array.slice().sort(function(num1, num2){
        return callback(num1) - callback(num2);
      });
    },

    flatten: function(array, shallow){
      const newArray = []
      if(shallow){
        for(i in array){
          if(Array.isArray(array[i])){
            for(j in array[i]){
              newArray.push(array[i][j])
            }
          } else{
            newArray.push(array[i])
          }
        }
      } else{
        for(i in array){
          if(Array.isArray(array[i])){
            newArray.push(...this.flatten(array[i]))
          } else {
            newArray.push(array[i])
          }
        }
      }
      return newArray
    },

    uniq: function(array, isSorted, callback){
      const callbackValues = []
      const newArray = []
      if(callback){
        for(i in array){
          let found = false
          callbackValues.find(element => element === callback(array[i]) + 1) ? found = true : found = false
          if(!found){
            callbackValues.push(callback(array[i]) + 1)
            newArray.push(array[i])
          }
        }
      } else {
        for(i in array){
          let found = false
          newArray.find(element => element === array[i]) ? found = true : found = false
          if(!found){
            newArray.push(array[i])
          }
        }
      }
      return newArray
    },

    keys: function(object){
      const newArray = []
      for(i in object){
        newArray.push(i)
      }
      return newArray
    },

    values: function(object){
      const newArray = []
      for(i in object){
        newArray.push(object[i])
      }
      return newArray
    },

    functions: function(object) {
      const newArray = []
      for(i in object){
        if(typeof object[i] === "function"){
          newArray.push(i);
        }
      }
      return newArray.sort();
    }
  }
})()

console.log(fi.libraryMethod())
