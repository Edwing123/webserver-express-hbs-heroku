const hbs = require('hbs');


// helpers
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalize', text => {
  let wordsInText = text.split(' ');
  wordsInText.forEach((word, idx) => {
    wordsInText[idx] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return wordsInText.join(' ');
});
