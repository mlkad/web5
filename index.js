function findNearest() {
  const num1 = +prompt("Enter the first number:");
  const num2 = +prompt("Enter the second number:");
  const num3 = +prompt("Enter the third number:");

  let dist1 = Math.abs(num1 - 100);
  let dist2 = Math.abs(num2 - 100);
  let dist3 = Math.abs(num3 - 100);

  let nearest;
  
  if (dist1 <= dist2 && dist1 <= dist3) nearest = num1;
  if (dist2 <= dist3 && dist2 <= dist1) nearest = num2;
  if (dist3 <= dist1 && dist3 <= dist2) nearest = num3;

  document.querySelector(".place1").textContent = `The nearest number to 100 is ${nearest}`;
}

function sortAlphabetical() {
  const sentence = document.querySelector('.input2').value;
  const sorted = sentence.split(' ').map(word => word.split('').sort().join('')).join(' ');
  document.querySelector('.place2').textContent = `The result is: ${sorted}`;
}

function nonRepeated() {
  const str = document.querySelector('.input3').value;
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      document.querySelector('.place3').textContent = `The result is: ${str[i]}`;
      return;
    }
  }
}

function moveChar() {
  const str =  document.querySelector('.input4').value;
  alert(str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''));
}

function findLongestShortest() {
  const word1 = prompt("Enter the first word:");
  const word2 = prompt("Enter the second word:");
  const word3 = prompt("Enter the third word:");

  const words = [word1, word2, word3];
  let longest = words[0];
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length >= longest.length) {
      longest = words[i];
    } if (words[i].length <= shortest.length) {
      shortest = words[i];
    }
  }
  document.querySelector('.place5').textContent = `The longest is ${longest} and the shortest is ${shortest}`;
}


function highlightText() {
  const p = document.querySelector('.p6');
  const span = p.innerText.split(' ');
  const highlightedWords = span.map(word => {
    if ( word.length> 7) {
      return `<span style="background-color: rgb(185, 213, 248);">${word}</span>`;
    }  else if (word.length < 3) {
      return `<span style="font-weight: bold;">${word}</span>`;
    } else {
      return word;
    }
  });
  p.innerHTML = highlightedWords.join(' ');
}

function replaceMarks() {
  const p = document.querySelector('.p7');
  p.textContent = p.textContent.replace(/\?/g, '*').replace(/!/g, '@');
}