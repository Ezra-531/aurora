function getRandomGreeting() {
  var greetings = [
    "polaroid of you dancing in my room",
    "its getting harder, harder to understand you",
    "once upon a time jonathan osorio was born",
    "love was really gone, what is love? a byproduct of free will? is free will even real?",
    "Made you look!",
    "alex o connor once said the kalam argument for God is circular reasoning",
    "I am not a girl",
    "imagine being a Chinese old man living in the mountains",
    "the seal is the real deal",
    "destiny going crazy in those debates W",
    "William lane craig is pretty smart",
    "Made by Jonathan osorio!",
    "Reload the page NOW!",
    "Downloading your history...",
    "hacking your wascohusd.org password rn",
    "I'm a pro life",
    "stop being horny men, have some value women PLEASE",
    "I hate everybody(jk)",
    "i am born on may 3rd 2010",
    "when will I meet someone as smart as me",
    "Powered by my tears :D",
    "war is so so so so much worse than you think",
    "I wish that girl best of lucksksd-sd",
    "I think islam is false",
    "the moment you fall in love is the moment you stop resisting",
    "i will never understand atheists",
    "give jonathan osorio all ur money for unblocked youtube",
    "ima drop out of high school watch",
    "HOLDING HANDS SAY I CAN",
    "follow God not religion",
    "gotta make it to friday, gotta make it to graduation, gotta make it to retirement.",
    "i want to be a therapist and help as many people as i can especially teens",
    "i am not real",
    "did u pay for this?",
    "if you are reading this, have a good day",
    "racist jokes are not funny no more",
    "Please be a good person",
    "win the battle against weed with GOD",
    "message me on my ig for more games",
    "thinkimgonnaloveyoutillimdead",
    "if i add more games on here ur chromebook will be too slow",
    "lain serial experiments, is so real wtf i want to be freinds with this fictional character",
    "We didn't start the fire! It was always burning, since the world's been turning!",
    "Don't ask questions if you can't handle the answers!",
    "If you are using Microsoft Edge, you need some help.",
    "people say they believe in God but i see no attempt in them trying to live sinlessly",
    "Shoutout to Fabritzio for his hospitality and Antonio ofc",
    "Shoutout to Jonathan Osorio thats me btw",
    "what even is the point in honest atheism",
    "do people actually read this",
    "april 18th, on my walk home from school 2024, is when my heart shattered",
    "i used to be so immature and im ashamed of my past",
    "heheeeeee",
    "Men I Trust",
    "Numb, is how i feel deep inside my soul",
    "wasco high school is lowkey trash ",
    "No fun allowed",
    "gulp",
    "i do love buying birth certificates from the black market",
    "'it is the pinnacle of all human emotion. More passionate than hope, far deeper from despair. Love' - homura",
    "Im kinda sped",
    "i want money so i can buy stuff",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "im sorry i draggged you in my way",
    "i love philosophy",
    "'pretty appearance ugly heart'",
    "woahhh",
    "my eyes are so read coding this new ui",
    "Trust me, I did not copy Minecraft with this",
    "a man is not just a good looking object",
    "love purely",
    "LOVE",
    "Desman is cool",
    "more love less violence",
    "u better not be looking at this lil bro",
    "a women is not just a good looking object ",
    "life is meaningless without victories",
    "Fact: im better than fabritzio at soccer",
    "i do not understand understanding, cociousneess help dualist no im going insane not even articulating a good sentence i wantto be a pony and live in a hut in the jungle and i hate myself but i dont what im sorry ",
    "I am a tech wiz as the youngins would say it",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
