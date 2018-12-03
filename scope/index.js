const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB - Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC - CardiB
        }
      }

      personC = personA;

      // Log C: personB - CardiB
    }

    changePerson();

    // Log D: personC - Paul

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];
    return result;

    // Annotation:
    // We start off in the creation phase and the interpreter sees 3 global declarations and sets them to undefined. Next it sees a function called changePerson and sets the label to changePerson and sets its value to a function definition. We then move into the execution phase and move down to line 28 where changePerson is invoked. We move back up to line 7 where the change person function is declared. Within the function we have a conditional statement that says if personA is strictly equal to 'Paul' then execute the line of code that is block scoped. Within the block scope we create a new global variable and set the value to Cardi B. We then invoke the beautifyPerson function and move down to line 13. Within the function we consoleLog person B which is Ben. Next we move to line 16 where there is another conditional that states if personB includes B then execute the block below. We then reassign personB to person (now CardiB) and then reassign person C to person B (now CardiB again) which is the next console log. Next we reassign personC to personA. The next console log on line 25 results in CardiB. We exit out of the changePerson function and consolelog personC on line 30 which is now Paul from the last reassignment.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number - 75

      function newNumber() {
        number = 64;

        // Log B: number - 64
      }

      newNumber();

      // Log C: number - 64
    }

    numberFunction();

    // Log D: number - 

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];
    return result;

    // Annotation:
    // We start off in the creation phase and declare a variable called number where the value is undefined. We then create a function called numberFunction where the value is a function definition. We move down to line 67 where numberFunction is invoked and then back up to line 47 where it is declared and enter the execution phase. Within numberFunction we have a functionally scoped variable named number that is assigned the value of 75. On line 50 we have a conditional statement that says if number is equal to 75 then execute the block below it. Within the if block we have a block scoped variable called number assigned the value of 28. On line 54 we console log number which is 75 because it is functionally scoped. Move down to line 62 where new number is invoked and then back up to line 56 where newNumber is declared. Within newNumber there is a a variable called number with a declaration and assigned the value of 64. This variable moves up the scope chain and reassigns the value of number on line 48 within numberFunction. We consolelog number on line 59 and return 64. We exit newNumber. On line 64 we console log number and return 64. We exit numberFunction and the console log on line 69 returns 30 from the global scope.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting - 

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting - 
      }

      newPhrase();

      // Log C: greeting - 
    }

    greetingFunction();

    // Log D: greeting - 

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];
    return result;

    // Annotation:
    // Start off by entering the creation phase where greeting is declared and has a value of undefined. Next, move down to line 86 where greetingFunction is declared and given a value of a function definition. Next you move to line 106 where greetingFunction is invoked and then back to line 86 where it is declared. Within greeting function we have a functionally scope variabled named greeting that has the value of Yo. After we have a conditional statement that results in true. Within the block we have a new variable called greeting that is assigned the value of Howdy. On line 93 we console log Yo. Next we move down to line 101 where newPhrase is invoked and back to line 95 where it is declared. Within the function we have a new variable called greeting that is assigned the value of hey. This variable moves up the scope chain and reassigns yo on line 87. We console log on line98 and get Hey. Console log on line 103 results in the same Hey. We exit the greetingFunction and on line 108 we console log again adn get hello from the global space.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting - hi

      const newGreeting = () => {
        greeting = 'welcome';

        // Log B: greeting - welcome
      };

      newGreeting();

      // Log C: greeting - welcome
    };

    greetingGenerator();

    // Log D: greeting - howdy

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name - 
      }

      // Log B: name - 
    }

    // Log C: name - 

    sayName();

    // Log D: name - 

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];
    return result;

    // Annotation:
    // We start off in the creation phase and declare a variabled called name that is undefined. Next we declared a function called sayName that is given the value of a function definition. We console log on line 180 and get Brittany from the global scope. Next we invoke sayName and move back to line 164. Within sayName we have a functional scoped variable assigned the value of Pam. Next we have a if block that with a conditional that results in true, name is assigned to Nathaniel and then moves up the scope chain and reassign the value on line 165 to Nathaniel. On line 170 we have another if block that results in true and has a block scoped variable assigned the value of brittany. On line 174 we console log and get Nathaniel. On line 177 we console log and get Nathaniel again because we are in the same function. We exit say name and console log on line 184 where we get Brittany in the global scope. 
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog - Spot
      

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog - Spot

        dog = 'Biscuit';

        // Log C: dog - Biscuit

      }

      rollOver();

      // Log D: dog - Biscuit
    }

    petDog();

    // Log E: dog - Biscuit

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit - reference error - since we declared the variable using const it is placed in the temporal dead zone, so it knows it is there but it is not going to look anywhere else.
          const fruit = 'strawberry';
        }

        // Log B: fruit - mango 
      }

      // Log C: fruit - mango - because var was used in the block scope it leaked out to the top of the function scope on line 243
    }

    eatFruit();

    // Log D: fruit - apple

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ];
    return result;

    // Annotation:
    // It knows there is something called fruit but it is not there yet - reference error temporal dead zone
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num - 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum - 9
      }

      newNum = num;

      // Log C: newNum - 4
    };

    const fn2 = function(num){
      // Log D: num - 9

      num = num + 1;

      // Log E: num - 10
    };

    fn1();

    const result = [
      { 'A': 4 }, 
      { 'D': 9 }, 
      { 'E': 10 }, 
      { 'B': 9 }, 
      { 'C': 4 }
    ];


    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger - 75
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger - 0
      }

      // Log C: hunger - 75
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger - 80

    eatSnack();
    // Log E: hunger - 55

    const result = [
      { A: 75 },
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { E: 55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich - ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings - chipotle sauce
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich - not a mediocre sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping - gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
      { 'A': 'ketchup sandwich' },
      { 'D': 'gouda' },
      { 'B': undefined },
      { 'C': 'not a mediocre sandwich' },
      { 'E': 'not a mediocre sandwich' },
      { 'F': 'National Treasure' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num - 7
    }

    foo();

    // Log B: num - 

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade - 95
      }

      addPoints();

      // Log B: grade - 90
    }

    losePoints();

    // Log C: grade - 90

    const result = [
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num - 5
      num = 6;
      // Log B: num - 6
    }

    function second() {
      // Log C: num - reference error
      let num = 7;
    }

    first();
    second();

    // Log D: num - 6

    const result = [
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor - Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor - Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor - Pam

    changeInstructor();

    // Log F: instructor

    const result = [
      { 'E': 'Pam' },
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'D': 'Louisa' },
      { 'F': 'Louisa' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe - flipflop
    putOnShoe();
    // Log C: shoe

    const result = [
      { 'B': 'flipflop' },
      { 'A': undefined },
      { 'C': 'flipflop' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch - undefined
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch - soup
    }

    orderLunch();

    // Log C: lunch - soup

    const result = [
      {'B': 'soup'},
      {'C': 'soup' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;