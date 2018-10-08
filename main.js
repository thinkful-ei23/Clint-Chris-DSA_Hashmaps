'use strict';
const hashMapClass = require('./hash-map');
const chainHashMapClass = require('./hash-map-chaining');

function main() {
  // const lor = new hashMapClass();

  // lor.set('Hobbit', 'Bilbo');
  // lor.set('Hobbit', 'Frodo');
  // lor.set('Wizard', 'Gandolf');
  // lor.set('Human', 'Aragon');
  // lor.set('Elf', 'Legolas');
  // lor.set('Maiar', 'The Necromancer');
  // lor.set('Maiar', 'Sauron');
  // lor.set('RingBearer', 'Gollum');
  // lor.set('LadyOfLight', 'Galadriel');
  // lor.set('HalfElven', 'Arwen');
  // lor.set('Ent', 'Treebeard');

  // console.log(lor.get('Maiar'));
  // console.log(lor);

  // function isPalindrome(str) {
  //   const chars = new hashMapClass();
  //   for (let i = 0; i < str.length; i++) {
  //     let char = str[i];
  //     try {
  //       if (chars.get(char)) {
  //         chars.remove(char);
  //       } else {
  //         chars.set(char, 'odd');
  //       }
  //     }
  //     catch (err) {
  //       chars.set(char, 'odd');
  //     }
  //   }
  //   // console.log(chars);
  //   return (chars.length > 1) ? false : true;
  // }

  // console.log(isPalindrome('acecarr'));
  // console.log(isPalindrome('north'));

  // function anagramGrouping(arr) {
  //   const compareHash = new hashMapClass();
  //   let anagramGroups = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let currWord = arr[i];
  //     let sortedWord = arr[i].split('').sort().join('');

  //     try {
  //       compareHash.get(sortedWord).push(currWord);
  //     } catch (error) {
  //       compareHash.set(sortedWord, [currWord]);
  //     }
  //   }
  //   console.log(compareHash);
  //   for (let i = 0; i < compareHash._slots.length; i++) {
  //     if (compareHash._slots[i]) {
  //       anagramGroups.push(compareHash._slots[i].value);
  //     }
  //   }
  //   return anagramGroups;
  // }
  // console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

  const lor2 = new chainHashMapClass();

  lor2.set('Hobbit', 'Bilbo');
  lor2.set('Hobbit', 'Frodo');
  lor2.set('Wizard', 'Gandolf');
  lor2.set('Human', 'Aragon');
  lor2.set('Elf', 'Legolas');
  lor2.set('Maiar', 'The Necromancer');
  // lor2.set('Maiar', 'Sauron');
  // lor2.set('RingBearer', 'Gollum');
  // lor2.set('LadyOfLight', 'Galadriel');
  // lor2.set('HalfElven', 'Arwen');
  // lor2.set('Ent', 'Treebeard');

  console.log(lor2);

}

main();