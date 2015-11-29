var greetings = [
  'hi, my name is dan',
  // Game Advice
  '<span style="color: yellow">>></span> Fail to succeed <span style="color: yellow"><<</span>',
  '<span style="color: yellow">>></span> Surprise is the secret ingredient of FUN! <span style="color: yellow"><<</span>',
  '<span style="color: yellow">>></span> Love what you do <span style="color: yellow"><<</span>',
  '<span style="color: yellow">>></span> Only detail what you can do well! <span style="color: yellow"><<</span>',
  '<span style="color: yellow">>></span> Make players feel in control of their experience <span style="color: yellow"><<</span>',
  '<span style="color: yellow">>></span> Don\'t think about the goal, think about reasons to achieve it <span style="color: yellow"><<</span>',
  // RS
  '<span style="color: yellow">Free armor trimming!</span>',
  '<span style="color: yellow">buying gf</span>',
  '<span style="color: yellow">selling rune scimmy 32k</span>',
  '<span style="color: yellow">Examine</span> Dranyx1 <span style="color: yellow">(level-3)</span>',
  // MGS
  'La Li Lu Le Lo',
  'A cornered fox is more dangerous than a jackal!',
  'Nanomachines, son',
  '<span style="color: red">!</span>',
  // RTS
  'Nuclear launch detected.',
  'You must construct additional Pylons.',
  'We require more vespene gas.',
  'Somebody called for an exterminator?',
  'there is no cow level',
  '<span style="color: red">Wololo</span>',
  '<span style="color: blue">Wololo</span>',
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
  'Whenever there is a meeting, a parting is sure to follow',
  // Other
  'getRandomGreeting()',
  'I D D Q D',
  'So, how are you holding up? BECAUSE I\'M A POTATO!',
  'And all the cake is gone. You don\'t even care, do you?',
  'More questions? Splendid. I will be happy to assist you!',
  'Send me out, with a bang',
  'Don\'t make a girl a promise, if you know you can\'t keep it.',
  'Remember, no Russian.',
  // 'It is a good life we lead, brother. - The best. May it never change. - And may it never change us.',
  'VVVVVV',
  'All your base are belong to us',
  'C-c-c-combo breaker!',
  'Act your age, Joanna',
  'I used to be an adventurer like you...',
  'Boomshakalaka!',
  'You\'re not a nice person, are you?',
  'Iron from ice!'
];

var getRandomGreeting = function() {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

$('#splash-text').append(getRandomGreeting()).click(function() {
  $('#splash-text').html(getRandomGreeting());
});
