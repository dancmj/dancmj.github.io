var greetings = [
  'hi, my name is dan',
  // Game Advice
  'Fail to succeed',
  'Surprise is the secret ingredient of FUN!',
  'Love what you do',
  'Only detail what you can do well!',
  'Make players feel in control of their experience',
  'Don\'t think about the goal, think about reasons to achieve it',
  'Dynamic change is always interesting!',
  'You don\'t play chess to win every time!',
  'Money isn\'t your goal!',
  'Luck is what happens when preparation meets opportunity',
  // RS
  '<span style="color: yellow">Free armor trimming!</span>',
  '<span style="color: yellow">buying gf</span>',
  '<span style="color: yellow">A q p</span>',
  '<span style="color: yellow">. W</span>',
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
  'My life for Aiur',
  'Power overwhelming',
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
  // LIS
  'This is my storm... I caused this... I caused all of this.',
  'With great power comes great bullshit',
  'Wowser',
  'NO EMOJI',
  //Halo!
  'Don\'t make a girl a promise, if you know you can\'t keep it.',
  'If they came to hear me beg, they\'ll be disappointed.',
  'Were it so easy.',
  // Antichamber
  'Every journey is a series of choices. The first is to begin the journey.',
  'Patience has its own rewards.',
  'Some choices leave us running around a lot without really getting anywhere.',
  'The choice doesn\'t matter if the outcome is the same.',
  // Other
  'getRandomGreeting()',
  'I D D Q D',
  'So, how are you holding up? BECAUSE I\'M A POTATO!',
  'And all the cake is gone. You don\'t even care, do you?',
  'More questions? Splendid. I will be happy to assist you!',
  'Send me out, with a bang',
  'Remember, no Russian.',
  'Dont let your dreams be dreams',
  'GET OVER HERE!',
  'For England - James',
  // 'It is a good life we lead, brother. - The best. May it never change. - And may it never change us.',
  'VVVVVV',
  'All your base are belong to us',
  'C-c-c-combo breaker!',
  'Act your age, Joanna',
  'I used to be an adventurer like you...',
  'Boomshakalaka!',
  'You\'re not a nice person, are you?',
  'Iron from ice!',
  'DRAKE!',
  '"So you can grant him any wish, huh?" - "...To try, at least."',
  'MAKING GAMES IS HARD',
  //
  'Her name was River.'
];

var getRandomGreeting = function() {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

var spashText = $('#splash-text');

$('#splash-text').append(getRandomGreeting()).click(function() {
  $('#splash-text').html(getRandomGreeting());
});
