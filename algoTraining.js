function fizbuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 == 0) console.log('fizzbuzz');
    else if (i % 3 == 0) console.log('fizz');
    else if (i % 5 == 0) console.log('buzz');
  }
}

function harmlessRansomNote(note, magazine) {
  var noteArr = note.split('');
  var magazineArr = magazine.split('');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

function isPalindrome(string) {
  string = string.toLowerCase();
  var charArr = string.split('');
  var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charArr.forEach(char => {
    if (validChar.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;

  return false;
}

function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';
  
  for (var i = 0; i < lowerCaseStr.length; i++) {
     var currentLetter = lowerCaseStr[i];
     if (currentLetter === ' ') {
       newStr += currentLetter;
       continue;
     }
     var currentIndex = alphabet.indexOf(currentLetter);
     var newIndex = currentIndex + num;

     if (newIndex > 25) newIndex = newIndex - 26;
     if (newIndex < 0) newIndex = 26 + newIndex;
     if (str[i] === str[i].toUppercase()) {
       newStr =+ alphabet[newIndex].toUpperCase();
     }
     newStr += alphabet[newIndex];
  }

  return newStr;
}

function reverseWords(string) {
  var newStr = [];

  var words = string.split(' ');

  words.forEach((word) => {
    //newStr.push(word.split("").reverse().join(""));
    // or do this below
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    newStr.push(reversedWord);
  });

  return newStr.join(' ');
}

function reverseArrayInPLace(arr) {

  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}


//console.log(fizbuzz(20));
//console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));
console.log(isPalindrome("Madam, I'm Adam"));
//console.log(caesarCipher('Zoo Keeper', 2));
//console.log(reverseWords('This is a word'));
//console.log(reverseArrayInPLace([1,2,3,4,5,6,7,8,9,0]));



