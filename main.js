'use strict';
const hashMapClass = require('./hash-map');

function main() {
  const lor = new hashMapClass();

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  console.log(lor.get('Maiar'));
  console.log(lor);

  function isPalindrome(str) {
    const chars = new hashMapClass();
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      try {
        if (chars.get(char)) {
          chars.remove(char);
        } else {
          chars.set(char, 'odd');
        }
      }
      catch (err) {
        chars.set(char, 'odd');
      }
    }
    // console.log(chars);
    return (chars.length > 1) ? false : true;
  }

  console.log(isPalindrome('acecarr'));
  console.log(isPalindrome('north'));
}

main();