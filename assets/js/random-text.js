var greetings = [
  'hi, my name is dan',
  // Game Advice
  '>> Fail to succeed <<',
  '>> Surprise is the secret ingredient of FUN! <<',
  '>> Love what you do <<',
  '>> Only detail what you can do well! <<',
  '>> Make players feel in control of their experience <<',
  '>> Don\'t think about the goal, think about reasons to achieve it <<',
  // RS
  'Free armor trimming!',
  'buying gf',
  'Examine Dranyx1 (level-3)',
  // MGS
  'La Li Lu Le Lo',
  'A cornered fox is more dangerous than a jackal!',
  'Nanomachines, son',
  '!',
  // RTS
  'Nuclear launch detected.',
  'You must construct additional Pylons.',
  'We require more vespene gas.',
  'Somebody called for an exterminator?',
  'there is no cow level',
  'Wololo',
  'Start the game already!',
  'how do you turn this on?',
  // Nintendo
  'Stay fresh!',
  'Our princess is in another castle!',
  'Show me your moves!',
  'Hey! Listen!',
  'Do a barrel roll!',
  'Yo! Champ in the making!',
  'B A R R A L',
  'I AM ERROR',
  // Other
  'I D D Q D',
  'So, how are you holding up? BECAUSE I\'M A POTATO!',
  'And all the cake is gone. You don\'t even care, do you?',
  'More questions? Splendid. I will be happy to assist you!',
  'Send me out, with a bang',
  'Don\'t make a girl a promise, if you know you can\'t keep it.',
  'Remember, no Russian.',
  'It is a good life we lead, brother. - The best. May it never change. - And may it never change us.',
  'VVVVVV',
  'All your base are belong to us',
  'C-c-c-combo breaker!',
  'I used to be an adventurer like you...',
  'Boomshakalaka!',
  'You\'re not a nice person, are you?',
  'Iron from ice!'
];

$('#splash-text').append(function(){
  return greetings[Math.floor(Math.random() * greetings.length)];;
});
