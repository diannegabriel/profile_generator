const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  // TODO: Log the answer in a database
  rl.question(`What's an activity you like doing? `, (activity) => {
    // TODO: Log the answer in a database
    rl.question(`What music do you listen to? `, (music) => {      
      rl.question('What is your favourite cuisine? ', (cuisine) => {      
        rl.question('What is your favourite dish from that cuisine? ', (dish) => {      
          rl.question('What is your first world problem superpower? ', (power) => { 
            console.log(`My name is ${name}. I like ${activity} and ${music}. My favourite cuisine is ${cuisine} and the dish I really like the most from that cuisine is ${dish}. And I've always wished I had a superpower that ${power}.`)
            rl.close();
          });
        });
      });
    });
  });
});