isIsogram = (str) => {
  if (str.isEmpty) return false;
  if (str.length === 0) return false;

  let unique = new Set(str.toLowerCase().split(''));

  if (str.length !== unique.size) {
    return false;
  }

  return true;
}

function mySort(params) {
  let eleminateNonNumbers = [];

  params.forEach(function(num) {
    if (!isNaN(num)) eleminateNonNumbers.push(Math.trunc(num));
  }, this);
  
  return eleminateNonNumbers.sort(function(a, b){return a-b});
}

//console.log(isIsogram('Dermatoglyphics'));
//console.log(mySort([90, 45, 66, 'bye', 100.5]));


/*class weed {
  constructor(name) {
    this.crap = name;
  }

  getName() {
    return this.crap;
  }
}

class skunk extends weed {
  setName (name) {
    this.crap = name;
  }
}

var model = new skunk('Fopefolu');

console.log(model.getName());

model.setName('Alomaja');

console.log(model.getName());*/


function natural(num) {
  var result = 0;
  for (var index = 1; index < num; index++) {
    if (index % 3 == 0 || index % 5 == 0 ) {
      result += index;
    }
  }
  return result;
}

function sumHundred(num) {
  var arr = [];

  var total = 0;
  for (var i = num; i > 0; i--) {
    if (total < 100) {
      total += i;
      if (total > 100) {
        total -= i;
        continue;
      }
      arr.push(i);
    }
  }
  
  if (total < 100) {
    return 'Its not up to 100';
  }
  return [arr, total];
}

console.log(sumHundred(30));
//console.log(natural(10));
//console.log(7+8+15+16+17+18+19);