let msg = 'Welcome to Word Count';
console.log(msg);

//  declarations
let inputText = document.querySelector('#txt_word_count');
let wordCount = document.querySelector('#word_count');
let charCount = document.querySelector('#character_count');
let charCountMax = document.querySelector('#character_max');

// logics
function count() {
  let characters = inputText.value;
  let charLength = characters.length;
  let words = characters.split(/[\n\r\s]+/g).filter(function (word) {
    return word.length > 0;
  });
  wordCount.innerHTML = words.length;
  charCount.innerHTML = charLength;
  if (charLength > 100) {
    charCountMax.innerHTML = '| reached character limit 100';
  }
}

window.addEventListener('input', function (event) {
  if (event.target.matches('#txt_word_count')) {
    count();
  }
});
