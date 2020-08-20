var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 1;
  var remove = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[position] = value;
    position++;
  };

  someInstance.dequeue = function() {
    var deletedValue = storage[remove];
<<<<<<< HEAD
=======
    //delete deletedValue;
>>>>>>> 4f635dabaf1747965a482f6a75e1f2d40729c1af
    delete storage[remove];
    remove += 1;
    return deletedValue;
  };

  someInstance.size = function() {
<<<<<<< HEAD
=======

>>>>>>> 4f635dabaf1747965a482f6a75e1f2d40729c1af
    if (Object.keys(storage).length < 0 ) {
      return 0;
    }

    return Object.keys(storage).length;
  };

  return someInstance;
};
