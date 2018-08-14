function progression(start, end) {
  var val = 3; // this is the common difference
  var arithmeticProgression = []; // array to hold the arithmetric progression values
  var geometricProgression = []; // array to hold the geometric progression values

  // loop for the arithmetric progression and
  // it's incremented by the value of the 
  // common difference
  for (var i = start; i <= end; i += val) {
    // push it arithmeticProgression array
    arithmeticProgression.push(i); //
  }

  // loop for the geometric progression and
  // it's incremented by the product of the 
  // common difference
  for (var i = start; i <= end; i *= val) {
    // push it geometricProgression array
    geometricProgression.push(i);
  }

  // return an array of both values
  return [arithmeticProgression, geometricProgression];
}

// QUESTION 2
function getExtra(list1, list2) {
  var extra = []; //create a variable to hold the extra elements

  // this is a valid solution but it's a little
  // confusing and I can't really explain it too well
  /*var matches = false; 
  for (var i = 0; i < list1.length; i++) {
    matches = false; 
    for (var j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j])
        matches = true;
    } 
    if (!matches) extra.push(list1[i]); 
  }*/

  // go through each of the element in the first array
  list1.forEach(function(element) {
    // check if the element is in the second array
    if (list2.indexOf(element) === -1) {
      extra.push(element); // add the missing element to the extra array
    }
  });

  //return the missing elements
  return extra;
}

// This is a complex solution
/*function letters(word) {
  //
  return word.split(""); //
}
function pigLatinizeWord(word) {
  //
  var chars = letters(word); //
  return chars.slice(1).join("") + chars[0] + "ay";
} //
function pigLatinizeSentence(sentence) {
  //
  return sentence.replace(/\w+/g, pigLatinizeWord);
}*/

// I think this is a simpler solution QUESTION 3
function pigLatinizeSentence(sentence) {
  // get the words in the sentence
  var words = sentence.split(" ");
  var pigLatin = [];

  // go through each of the words
  words.forEach(word => {
    // get the first letter in the word
    var firstLetter = word.charAt(0);
    // remove the first letter in the word
    var remainder = word.slice(1);
    // combine them back together
    var putItTogether = remainder + firstLetter + "ay";
    // put it in the pigLatin array
    pigLatin.push(putItTogether);
  });

  // join them back and return the
  return pigLatin.join(" ");
}


function numbersToString(num) {
  var str = num.toString().split('');

  var unit = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
  };  
  var tens = {
    1 : 'one',
    2 : 'twenty',
    3 : 'thirty',
    4 : 'forty',
    5 : 'fifty',
  };

  var response = new Array(3);
  
  for (var i = 0; i < str.length; i++) {
    if (i == 0) {
      //response.push(unit[str[i]])
      response[0] = unit[str[i]] + ' hundred and ';
    } else if (i == 1) {
      //response.push(tens[str[i]]);
      response[1] = tens[str[i]];
    } else if (i == 2){
      //response.push(unit[str[i]]); 
      response[2] = unit[str[i]]; 
    }
  }

  return response;

  /*console.log(response);

  var final = [];
  for (var i = 0; i < response.length; i++) {
    if (i == 0) {
      final.push(tens[str[i]])
    } else if (i == 1) {
      final.push(unit[str[i]]);
    } else if (i == 2){
      final.push(unit[str[i]]);
    }
  }


  return final;*/
}

//console.log(progression(2, 23));
//console.log(getExtra([1, 2, 3, 34, 56, 83], [3, 2, 56]));
//console.log(pigLatinizeSentence("The quick brown fox"));
console.log(numbersToString(42));