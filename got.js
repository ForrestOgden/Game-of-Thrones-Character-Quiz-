  // function for dismissing the beginning introduction to the quiz ------------------------------------------------------------

  const start = function(){

  let intro = document.querySelector('.intro');

  intro.classList.add('animated');

  


  let clearIntroBeginQuiz = function(){

  intro.style.display = 'none';
  
  document.querySelector('.question-1-form').classList.remove('hidden');
  
}

  
  setTimeout(clearIntroBeginQuiz, 1000);


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // https://www.sparknotes.com/lit/a-game-of-thrones/characters/

  // Get all quiz outcome characters -> turn into objects with points slot -> create new array with all objects in it-------------


    const characters = [
    'Eddard (Ned) Stark', 'Catelyn (Cat) Tully', 'Daenerys Stormborn Targaryen', 'Jon Snow', 'Tyrion (The Imp) Lannister',
    'Sansa Stark', 'Arya Stark', 'Cersei Lannister', 
    'Ser Jaime (The Kingslayer) Lannister', 'Petyr (Littlefinger) Baelish', 'Varys (The Spider)', 'Ser Jorah Mormont', 
    'Khal Drogo', 'Prince Joffrey (Joff) Baratheon', 'Theon Greyjoy', 'Samwell (Sam) Tarly', 
    'Ramsay Bolton', 'Sandor (The Hound) Clegane', 'Tywin Lannister', 'Margaery Tyrell', 'Brienne of Tarth'];


  // also need to get all character images and store them in each object

  const characterImages = [
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-ned-stark.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-catelyn-stark.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-queen-daenerys-targaryen.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-jon-snow.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-tyrion-lannister.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-sansa-stark.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-arya-stark.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/game-of-thrones-main-characters-ranked-cersei-lena-headey.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-jaime-lannister.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-littlefinger.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-lord-varys.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-jorah-mormont.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-khal-drogo.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-king-joffrey.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-theon-greyjoy.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-samwell-tarly.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-ramsay-bolton.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-the-hound-sandor-clegaine.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-tywin-lannister.jpg',
  'https://www.thewrap.com/wp-content/uploads/2019/04/every-game-of-thrones-main-character-ranked-margaery-tyrell.jpg',
  'https://metro.co.uk/wp-content/uploads/2019/04/FL2_11_Game_of_Thrones_S08-162f.jpg?quality=90&strip=all&zoom=1&resize=644%2C428',
  ];


   const characterPointTracker = []

   for(let i = 0; i < characters.length; i++){

        characters[i] = {
      
        name: `${characters[i]}`,
        points: 0,

        };

    characterPointTracker.push(characters[i])

    }

    console.log(characterPointTracker);

    
    // assign images to characters in tracker in order:------------------------------------------------------------------

    for(let i = 0; i < characters.length; i++) {

    characters[i].image = characterImages[i];
    
    }

    console.log(characterPointTracker);


   // Now, create a description for each character and assign it to each object as a description:

  const descriptions = [
  `The Lord of Winterfell and new Hand of the King. A devoted father and dutiful lord, he is best characterized by his strong sense of honor, and he strives to always do what is right, regardless of his personal feelings.`,
  `Ned’s wife and Lady Stark of Winterfell. She is intelligent, strong, and fiercely devoted to her family, leading her to seek out the person responsible for trying to kill her son Bran.`,
  `The Dothraki khaleesi (queen) and Targaryen princess. She and her brother are the only surviving members of the Targaryen family, and she grows from a frightened girl to a confident ruler, while still maintaining her kindness.`,
  `Ned Stark’s bastard son. Since Catelyn is not his mother, he is not a proper member of the Stark family, and he often feels himself an outsider. He is also a highly capable swordsman and thinker, with a knack for piercing observations.`,
  `A small man with a giant intellect and sharp tongue. Tyrion does not pity himself but rather accepts his shortcomings as a little person and turns them to his advantage. He loves his family but recognizes their greed and ambition.`,
  `The elder Stark daughter and a beautiful, but extremely naïve, young girl. The twelve-year-old Sansa imagines her life as though it were a storybook, ignoring cruel realities around her and concerning herself only with marrying Joffrey Baratheon.`,
  `The youngest Stark girl and a wild, willful, but very intelligent child. What the ten-year-old Ayra lacks in her sister’s refinement, she makes up for with skill in swordfighting and riding. Arya rejects the idea of a woman’s role being to marry and have babies.`,
  `Queen of the realm and wife of Robert Baratheon. She despises Robert (as well as most other people it seems), and she is cunning and extremely ambitious.`,
  `Brother to Tyrion and Cersei, as well as Cersei’s lover. Jaime is arrogant, short-tempered, and rash, but he’s also a gifted swordsman. He is widely mistrusted and called Kingslayer because he murdered the previous king.`,
  `The Red Keep’s master of coin. He is shrewd, conniving, and selfish, and he keeps informed about everything that goes on in King’s Landing. He holds a grudge against the Starks because he wanted to marry Catelyn when he was younger.`,
  `The Red Keep’s master of whispers and a eunuch. His role in the court is to run a network of spies and keep the king informed, and he often uses what he knows to manipulate those around him, including the king.`,
  `An exiled knight who serves unofficially as Daenerys’s chief advisor. Though he was exiled by Ned Stark for selling slaves, he is intelligent, valiant, and a great fighter. He swears allegiance to Viserys as true king of Westeros, but he also feeds information about the Targaryens back to Varys.`,
  `A powerful khal (king) among the Dothraki people and the husband of Daenerys Targaryen. Stoic and brave, Drogo is an exceptional warrior who shows his enemies no mercy. He controls a massive nomadic tribe, or khalasar.`,
  `The repulsive prince of Westeros. The twelve-year-old Joff is the eldest child of Cersei and Robert, and he is spoiled, impulsive, and cruel when using his power as prince and heir to the throne.`,
  `The Starks’s ward and Robb’s best friend. Ned Stark took the young Theon, now nineteen, as a ward after putting down a rebellion led by the Greyjoy family, and Theon consequently grew up with the Stark children as something like a brother.`,
  `A new recruit to the Night’s Watch who is fat and cowardly but very smart. Sam loves to read and eat but hates to fight, and he quickly becomes one of Jon Snow’s closest companions at the Wall.`,
  `Ramsay is a genuine sociopath. He seems to be the personification of pure evil, with no redeemable features. He is dishonorable, manipulative, ruthless, extremely sadistic, sexually depraved, wild, and completely capable of committing unspeakable atrocities without remorse, simply for pure amusement.`,
  `Prince Joff’s unofficial bodyguard. Proud that he is not a knight, The Hound appears to have no scruples whatsoever and does what Joffrey orders, however cruel or unjust, without question. His face is scarred on one side by extensive burning inflicted by his brother, Gregor.`,
  `The calculating lord of Casterly Rock and the richest man in the realm. A fierce general, Tywin will go to great ends to protect the honor of the Lannister name.`,
  `Margaery's beauty was equaled by her cleverness, which she had in abundance. A true protégée of her grandmother Olenna, she was a gifted manipulator who knew how to maneuver her way in court politics. Margaery's strength was in her ability to win the minds and loyalties of her subjects.`,
  `Her lifetime of scorn and condescension led her to becoming extremely pragmatic and blunt. However, it has also provided her with nerves of Valyrian steel, and she is completely unafraid to face off against powerful warriors.`,
];



    for(let i = 0; i < characters.length; i++) {

    characters[i].description = descriptions[i];
    
    }

    console.log(characterPointTracker);



  
  // function for moving to the next question after completing it --------------------------------------------------------------------------

const form1 = document.querySelector('.question-1-form');
const form2 = document.querySelector('.question-2-form');
const form3 = document.querySelector('.question-3-form');
const form4 = document.querySelector('.question-4-form');
const form5 = document.querySelector('.question-5-form');
const form6 = document.querySelector('.question-6-form');
const form7 = document.querySelector('.question-7-form');
const form8 = document.querySelector('.question-8-form');
const form9 = document.querySelector('.question-9-form');
const form10 = document.querySelector('.question-10-form');
const form11 = document.querySelector('.question-11-form');
const form12 = document.querySelector('.question-12-form');
const form13 = document.querySelector('.question-13-form');
const form14 = document.querySelector('.question-14-form');
const form15 = document.querySelector('.question-15-form');
const resultContainer = document.querySelector('.result-container');
  


const hide = function(form){

  form.classList.add('hidden');

}

const show = function(form){

  form.classList.remove('hidden');

}



// Question 1 -----------------------------------------------------------------------------------------

const handleQ1 = function(){

    let choices1 = document.getElementsByName('q1');

    for(let i = 0; i < choices1.length; i++) {

      if(choices1[i].checked){
        console.log(choices1[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices1[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices1[i].checked = false;

      
    }

     hide(form1);
      
     show(form2);

     console.log(characterPointTracker);

};

    
// Question 2 -----------------------------------------------------------------------------

const handleQ2 = function(){
    
   let choices2 = document.getElementsByName('q2');

    for(let i = 0; i < choices2.length; i++) {

      if(choices2[i].checked){
        console.log(choices2[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices2[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices2[i].checked = false;

    }

     hide(form2);
      
     show(form3);

     console.log(characterPointTracker);

};

    
// Question 3 -----------------------------------------------------------------------------


const handleQ3 = function(){
    
   let choices3 = document.getElementsByName('q3');

    for(let i = 0; i < choices3.length; i++) {

      if(choices3[i].checked){
        console.log(choices3[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices3[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 2;
      }
      
      choices3[i].checked = false;

    }

     hide(form3);
      
     show(form4);

     console.log(characterPointTracker);

};




// Question 4 -----------------------------------------------------------------------------


const handleQ4 = function(){
    
   let choices4 = document.getElementsByName('q4');

    for(let i = 0; i < choices4.length; i++) {

      if(choices4[i].checked){
        console.log(choices4[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices4[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices4[i].checked = false;

    }

     hide(form4);
      
     show(form5);

     console.log(characterPointTracker);

};



// Question 5 -----------------------------------------------------------------------------

const handleQ5 = function(){
    
   let choices5 = document.getElementsByName('q5');

    for(let i = 0; i < choices5.length; i++) {

      if(choices5[i].checked){
        console.log(choices5[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices5[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 2;
      }
      
      choices5[i].checked = false;

    }

     hide(form5);
      
     show(form6);

     console.log(characterPointTracker);

};

// Question 6-----------------------------------------------------------------------------

const handleQ6 = function(){
    
   let choices6 = document.getElementsByName('q6');

    for(let i = 0; i < choices6.length; i++) {

      if(choices6[i].checked){
        console.log(choices6[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices6[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 4;
      }
      
      choices6[i].checked = false;

    }

     hide(form6);
      
     show(form7);

     console.log(characterPointTracker);

};

// Question 7-----------------------------------------------------------------------------

const handleQ7 = function(){
    
   let choices7 = document.getElementsByName('q7');

    for(let i = 0; i < choices7.length; i++) {

      if(choices7[i].checked){
        console.log(choices7[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices7[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 2;
      }
      
      choices7[i].checked = false;

    }

     hide(form7);
      
     show(form8);

     console.log(characterPointTracker);

};

// Question 8-----------------------------------------------------------------------------

const handleQ8 = function(){
    
   let choices8 = document.getElementsByName('q8');

    for(let i = 0; i < choices8.length; i++) {

      if(choices8[i].checked){
        console.log(choices8[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices8[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices8[i].checked = false;

    }

     hide(form8);
      
     show(form9);

     console.log(characterPointTracker);

};

// Question 9-----------------------------------------------------------------------------

const handleQ9 = function(){
    
   let choices9 = document.getElementsByName('q9');

    for(let i = 0; i < choices9.length; i++) {

      if(choices9[i].checked){
        console.log(choices9[i].value);

        let pointReceiver = characterPointTracker.find(obj => obj.name === choices9[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 2;
      }
      
      choices9[i].checked = false;

    }

     hide(form9);
      
     show(form10);

     console.log(characterPointTracker);

};

// Question 10-----------------------------------------------------------------------------

const handleQ10 = function(){
    
   let choices10 = document.getElementsByName('q10');

    for(let i = 0; i < choices10.length; i++) {

      if(choices10[i].checked){
        console.log(choices10[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices10[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices10[i].checked = false;

    }

     hide(form10);
      
     show(form11);

     console.log(characterPointTracker);

};

// Question 11-----------------------------------------------------------------------------

const handleQ11 = function(){
    
   let choices11 = document.getElementsByName('q11');

    for(let i = 0; i < choices11.length; i++) {

      if(choices11[i].checked){
        console.log(choices11[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices11[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 4;
      }
      
      choices11[i].checked = false;

    }

     hide(form11);
      
     show(form12);

     console.log(characterPointTracker);

};

// Question 12-----------------------------------------------------------------------------

const handleQ12 = function(){
    
   let choices12 = document.getElementsByName('q12');

    for(let i = 0; i < choices12.length; i++) {

      if(choices12[i].checked){
        console.log(choices12[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices12[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 3;
      }
      
      choices12[i].checked = false;

    }

     hide(form12);
      
     show(form13);

     console.log(characterPointTracker);

};

// Question 13-----------------------------------------------------------------------------

const handleQ13 = function(){
    
   let choices13 = document.getElementsByName('q13');

    for(let i = 0; i < choices13.length; i++) {

      if(choices13[i].checked){
        console.log(choices13[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices13[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 2;
      }
      
      choices13[i].checked = false;

    }

     hide(form13);
      
     show(form14);

     console.log(characterPointTracker);

};

// Question 14-----------------------------------------------------------------------------

const handleQ14 = function(){
    
   let choices14 = document.getElementsByName('q14');

    for(let i = 0; i < choices14.length; i++) {

      if(choices14[i].checked){
        console.log(choices14[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices14[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 1;
      }
      
      choices14[i].checked = false;

    }

     hide(form14);
      
     show(form15);

     console.log(characterPointTracker);

};

// Question 15 -----------------------------------------------------------------------------


const handleQ15 = function(){
    
   let choices15 = document.getElementsByName('q15');

    for(let i = 0; i < choices15.length; i++) {

      if(choices15[i].checked){
        console.log(choices15[i].value);
        let pointReceiver = characterPointTracker.find(obj => obj.name === choices15[i].value);
        console.log(pointReceiver);
        pointReceiver.points += 1;
      }
      
      choices15[i].checked = false;

    }

     hide(form15);
      
     resultContainer.style.display = 'flex';
     resultContainer.classList.add('color-shift');


     let result = characterPointTracker.sort((a,b) => b.points - a.points);

     let winningNameString = `Based on how you answered, your character is ${result[0].name}!`;
     let winningImage = result[0].image;
     let winningDescription = result[0].description;

     document.querySelector('.result-heading').textContent = winningNameString;
     document.querySelector('.result').innerHTML = `<img src='${winningImage}'> <p class='description'>${winningDescription}</p>`;


     console.log(result);

     
};
