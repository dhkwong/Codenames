import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  //create starter board. the key reflects if the card is yellow, red, blue, or black. The Value reflects the word
  private board = new BehaviorSubject([{ 0: 'yellow', 1: 'red', 2: 'blue', 3: 'black' }]);
  //allows us to pull the board at any time by making it an observable returning data
  //e.g in spymaster
  // create local variable to hold the board
  // board:string; OR board:any[] since you know it's a matrix of key:value pairs
  //then pull the board data held within the service and assign that value to the board
  // this.boardService.sharedBoard.subscribe(board => this.board = board)
  sharedBoard = this.board.asObservable();
  constructor() {

  }
  createBoard() {
    //randomize words and numbers to randomly create a board pattern 
    var words: string[] = ['Acne', 'Acre', 'Addendum', 'Advertise', 'Aircraft', 'Aisle', 'Alligator', 'Alphabetize', 'America', 'Ankle', 'Apathy', 'Applause', 'Applesauce', 'Application', 'Archaeologist', 'Aristocrat', 'Arm', 'Armada', 'Asleep', 'Astronaut', 'Athlete', 'Atlantis', 'Aunt', 'Avocado', 'BabySitter', 'Backbone', 'Bag', 'Baguette', 'Bald', 'Balloon', 'Banana', 'Banister', 'Baseball', 'Baseboards', 'Basketball', 'Bat', 'Battery', 'Beach', 'Beanstalk', 'Bedbug', 'Beer', 'Beethoven', 'Belt', 'Bib', 'Bicycle', 'Big', 'Bike', 'Billboard', 'Bird', 'Birthday', 'Bite', 'Blacksmith', 'Blanket', 'Bleach', 'Blimp', 'Blossom', 'Blueprint', 'Blunt', 'Blur', 'Boa', 'Boat', 'Bob', 'Bobsled', 'Body', 'Bomb', 'Bonnet', 'Book', 'Booth', 'Bowtie', 'Box', 'Boy', 'Brainstorm', 'Brand', 'Brave', 'Bride', 'Bridge', 'Broccoli', 'Broken', 'Broom', 'Bruise', 'Brunette', 'Bubble', 'Buddy', 'Buffalo', 'Bulb', 'Bunny', 'Bus', 'Buy', 'Cabin', 'Cafeteria', 'Cake', 'Calculator', 'Campsite', 'Can', 'Canada', 'Candle', 'Candy', 'Cape', 'Capitalism', 'Car', 'Cardboard', 'Cartography', 'Cat', 'Cd', 'Ceiling', 'Cell', 'Century', 'Chair', 'Chalk', 'Champion', 'Charger', 'Cheerleader', 'Chef', 'Chess', 'Chew', 'Chicken', 'Chime', 'China', 'Chocolate', 'Church', 'Circus', 'Clay', 'Cliff', 'Cloak', 'Clockwork', 'Clown', 'Clue', 'Coach', 'Coal', 'Coaster', 'Cog', 'Cold', 'College', 'Comfort', 'Computer', 'Cone', 'Constrictor', 'Continuum', 'Conversation', 'Cook', 'Coop', 'Cord', 'Corduroy', 'Cot', 'Cough', 'Cow', 'Cowboy', 'Crayon', 'Cream', 'Crisp', 'Criticize', 'Crow', 'Cruise', 'Crumb', 'Crust', 'Cuff', 'Curtain', 'Cuticle', 'Czar', 'Dad', 'Dart', 'Dawn', 'Day', 'Deep', 'Defect', 'Dent', 'Dentist', 'Desk', 'Dictionary', 'Dimple', 'Dirty', 'Dismantle', 'Ditch', 'Diver', 'Doctor', 'Dog', 'Doghouse', 'Doll', 'Dominoes', 'Door', 'Dot', 'Drain', 'Draw', 'Dream', 'Dress', 'Drink', 'Drip', 'Drums', 'Dryer', 'Duck', 'Dump', 'Dunk', 'Dust', 'Ear', 'Eat', 'Ebony', 'Elbow', 'Electricity', 'Elephant', 'Elevator', 'Elf', 'Elm', 'Engine', 'England', 'Ergonomic', 'Escalator', 'Eureka', 'Europe', 'Evolution', 'Extension', 'Eyebrow', 'Fan', 'Fancy', 'Fast', 'Feast', 'Fence', 'Feudalism', 'Fiddle', 'Figment', 'Finger', 'Fire', 'First', 'Fishing', 'Fix', 'Fizz', 'Flagpole', 'Flannel', 'Flashlight', 'Flock', 'Flotsam', 'Flower', 'Flu', 'Flush', 'Flutter', 'Fog', 'Foil', 'Football', 'Forehead', 'Forever', 'Fortnight', 'France', 'Freckle', 'Freight', 'Fringe', 'Frog', 'Frown', 'Gallop', 'Game', 'Garbage', 'Garden', 'Gasoline', 'Gem', 'Ginger', 'Gingerbread', 'Girl', 'Glasses', 'Goblin', 'Gold', 'Goodbye', 'Grandpa', 'Grape', 'Grass', 'Gratitude', 'Gray', 'Green', 'Guitar', 'Gum', 'Gumball', 'Hair', 'Half', 'Handle', 'Handwriting', 'Hang', 'Happy', 'Hat', 'Hatch', 'Headache', 'Heart', 'Hedge', 'Helicopter', 'Hem', 'Hide', 'Hill', 'Hockey', 'Homework', 'Honk', 'Hopscotch', 'Horse', 'Hose', 'Hot', 'House', 'Houseboat', 'Hug', 'Humidifier', 'Hungry', 'Hurdle', 'Hurt', 'Hut', 'Ice', 'Implode', 'Inn', 'Inquisition', 'Intern', 'Internet', 'Invitation', 'Ironic', 'Ivory', 'Ivy', 'Jade', 'Japan', 'Jeans', 'Jelly', 'Jet', 'Jig', 'Jog', 'Journal', 'Jump', 'Key', 'Killer', 'Kilogram', 'King', 'Kitchen', 'Kite', 'Knee', 'Kneel', 'Knife', 'Knight', 'Koala', 'Lace', 'Ladder', 'Ladybug', 'Lag', 'Landfill', 'Lap', 'Laugh', 'Laundry', 'Law', 'Lawn', 'Lawnmower', 'Leak', 'Leg', 'Letter', 'Level', 'Lifestyle', 'Ligament', 'Light', 'Lightsaber', 'Lime', 'Lion', 'Lizard', 'Log', 'Loiterer', 'Lollipop', 'Loveseat', 'Loyalty', 'Lunch', 'Lunchbox', 'Lyrics', 'Machine', 'Macho', 'Mailbox', 'Mammoth', 'Mark', 'Mars', 'Mascot', 'Mast', 'Matchstick', 'Mate', 'Mattress', 'Mess', 'Mexico', 'Midsummer', 'Mine', 'Mistake', 'Modern', 'Mold', 'Mom', 'Monday', 'Money', 'Monitor', 'Monster', 'Mooch', 'Moon', 'Mop', 'Moth', 'Motorcycle', 'Mountain', 'Mouse', 'Mower', 'Mud', 'Music', 'Mute', 'Nature', 'Negotiate', 'Neighbor', 'Nest', 'Neutron', 'Niece', 'Night', 'Nightmare', 'Nose', 'Oar', 'Observatory', 'Office', 'Oil', 'Old', 'Olympian', 'Opaque', 'Opener', 'Orbit', 'Organ', 'Organize', 'Outer', 'Outside', 'Ovation', 'Overture', 'Pail', 'Paint', 'Pajamas', 'Palace', 'Pants', 'Paper', 'Paper', 'Park', 'Parody', 'Party', 'Password', 'Pastry', 'Pawn', 'Pear', 'Pen', 'Pencil', 'Pendulum', 'Penis', 'Penny', 'Pepper', 'Personal', 'Philosopher', 'Phone', 'Photograph', 'Piano', 'Picnic', 'Pigpen', 'Pillow', 'Pilot', 'Pinch', 'Ping', 'Pinwheel', 'Pirate', 'Plaid', 'Plan', 'Plank', 'Plate', 'Platypus', 'Playground', 'Plow', 'Plumber', 'Pocket', 'Poem', 'Point', 'Pole', 'Pomp', 'Pong', 'Pool', 'Popsicle', 'Population', 'Portfolio', 'Positive', 'Post', 'Princess', 'Procrastinate', 'Protestant', 'Psychologist', 'Publisher', 'Punk', 'Puppet', 'Puppy', 'Push', 'Puzzle', 'Quarantine', 'Queen', 'Quicksand', 'Quiet', 'Race', 'Radio', 'Raft', 'Rag', 'Rainbow', 'Rainwater', 'Random', 'Ray', 'Recycle', 'Red', 'Regret', 'Reimbursement', 'Retaliate', 'Rib', 'Riddle', 'Rim', 'Rink', 'Roller', 'Room', 'Rose', 'Round', 'Roundabout', 'Rung', 'Runt', 'Rut', 'Sad', 'Safe', 'Salmon', 'Salt', 'Sandbox', 'Sandcastle', 'Sandwich', 'Sash', 'Satellite', 'Scar', 'Scared', 'School', 'Scoundrel', 'Scramble', 'Scuff', 'Seashell', 'Season', 'Sentence', 'Sequins', 'Set', 'Shaft', 'Shallow', 'Shampoo', 'Shark', 'Sheep', 'Sheets', 'Sheriff', 'Shipwreck', 'Shirt', 'Shoelace', 'Short', 'Shower', 'Shrink', 'Sick', 'Siesta', 'Silhouette', 'Singer', 'Sip', 'Skate', 'Skating', 'Ski', 'Slam', 'Sleep', 'Sling', 'Slow', 'Slump', 'Smith', 'Sneeze', 'Snow', 'Snuggle', 'Song', 'Space', 'Spare', 'Speakers', 'Spider', 'Spit', 'Sponge', 'Spool', 'Spoon', 'Spring', 'Sprinkler', 'Spy', 'Square', 'Squint', 'Stairs', 'Standing', 'Star', 'State', 'Stick', 'Stockholder', 'Stoplight', 'Stout', 'Stove', 'Stowaway', 'Straw', 'Stream', 'Streamline', 'Stripe', 'Student', 'Sun', 'Sunburn', 'Sushi', 'Swamp', 'Swarm', 'Sweater', 'Swimming', 'Swing', 'Tachometer', 'Talk', 'Taxi', 'Teacher', 'Teapot', 'Teenager', 'Telephone', 'Ten', 'Tennis', 'Thief', 'Think', 'Throne', 'Through', 'Thunder', 'Tide', 'Tiger', 'Time', 'Tinting', 'Tiptoe', 'Tiptop', 'Tired', 'Tissue', 'Toast', 'Toilet', 'Tool', 'Toothbrush', 'Tornado', 'Tournament', 'Tractor', 'Train', 'Trash', 'Treasure', 'Tree', 'Triangle', 'Trip', 'Truck', 'Tub', 'Tuba', 'Tutor', 'Television', 'Twang', 'Twig', 'Twitterpated', 'Type', 'Unemployed', 'Upgrade', 'Vest', 'Vision', 'Wag', 'Water', 'Watermelon', 'Wax', 'Wedding', 'Weed', 'Welder', 'Whatever', 'Wheelchair', 'Whiplash', 'Whisk', 'Whistle', 'White', 'Wig', 'Will', 'Windmill', 'Winter', 'Wish', 'Wolf', 'Wool', 'World', 'Worm', 'Wristwatch', 'Yardstick', 'Zamboni', 'Zen', 'Zero', 'Zipper', 'Zone', 'Zoo']

    var numbers: Array<number>;
    //create array from 1 to length of words counting from 0-length
    for (var i = 0; i < words.length; i++) {
      numbers.push(i);
    }
    //shuffle array
    numbers = shuffle(numbers);
    //shuffle logic
    function shuffle(array) {
      var tmp, current, top = array.length;
      if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }

    //assign values. you can assign to any index location in an array in js. the values in between will just be undefined
    //Assigning for RED cards 8 cards since they start second
    for (let num = 0; num < 8; num++) {
      let randIndex = numbers[num]
      //assigns values at the randomized index locations from the randomized array, numbers
      this.board[randIndex] = { 1: words[randIndex] }
    }
    //Assigning for BLUE cards. 9 cards since they start first
    for (let num = 8; num < 17; num++) {
      let randIndex = numbers[num];
      this.board[randIndex] = { 2: words[randIndex] }
    }
    //Assigning for YELLOW cards
    for (let num = 17; num < 24; num++) {
      let randIndex = numbers[num];
      this.board[randIndex] = { 0: words[randIndex] }
    }
    //Assigning for Assassin/Black card 
    this.board[numbers[24]] = { 3: words[numbers[24]] }
    
    return this.board
  }

  updateBoard(newBoard: any[]) {
    //BehaviorSubject from rxjs assigns new value through .next(newvalue)
    this.board.next(newBoard);
    //once the value is assigned, we can then call the updated board through sharedBoard by subscribing to it through our component

  }
}