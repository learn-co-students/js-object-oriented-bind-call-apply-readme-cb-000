// use this to copy code snippets or us your browser's console
function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

// greet(); // my name is , hi!

let person = {
  name: 'Bob',
  greet: greet
};

// person.greet(); // my name is Bob, hi!

let sally = { name: 'Sally' };

// greet.call(sally, 'Terry', 'George');
// greet.apply(sally, ['Terry', 'George']);

function greet(customer) {
  console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);

// newGreet('Bob');
 
// greet('Bob');

class Event {
  constructor(title, keywords) {
      this.title = title;
      this.keywords = keywords;
  }
}

class User {
  constructor(name, interests) {
      this.name = name;
      this.interests = interests;
  }

  matchInterests(event) {
      // return event.keywords.some(
      //     function(word) {
      //         return this.interests.includes(word);
      //     }.bind(this) 
      // );
    return event.keywords.some(word => this.interests.includes(word));
  }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let silly = new User('silly', ['cats', 'food', 'karaoke']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
silly.matchInterests(freeMusic);