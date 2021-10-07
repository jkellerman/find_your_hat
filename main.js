const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
      this._field = field;
      this.y = 0;
      this.x = 0;
      //Set home position before game starts//
      this.field[0][0] = pathCharacter;
  }

  get field(){
      return this._field;
  }

  runGame() {
      let playing = true;
      while (playing) {
          this.print();
          this.prompt();
          if(!this.isInBounds()) {
              console.log('Sorry you fell out of bounds!');
              playing = false;
              break;
          } else if (this.isHole()) {
              console.log('Sorry, you fell down a hole!');
              playing = false;
              break;
          } else if (this.isHat()) {
              console.log('Congrats, you found your hat!');
              playing = false;
              break;
          }
            //Update current location on the map//
            this.field[this.y][this.x] = pathCharacter;
      }
  }
  //prompt user input and move the player cursor
  
  prompt(){
    let direction = prompt('Which Way?');
    switch(direction) {
      case 'u':
        this.y -= 1;
        break;

      case 'd':
        this.y += 1;
        break;

      case 'l':
        this.x -= 1;
        break;

      case 'r':
        this.x += 1;
        break;

      default:
        console.log('Enter U, D, L or R.');
        this.prompt();
        break;
    }
  }

isInBounds() {
    return (
        this.y >= 0 &&
        this.x >= 0 &&
        this.y < this.field.length &&
        this.x < this.field[0].length);
}

isHat() {
    return this.field[this.y][this.x] === hat;
}

isHole() {
    return this.field[this.y][this.x] === hole;
}

//print the field to the terminal in a 2D plane
print() {
    const displayString = this.field.map(row => {
        return row.join('');})
        .join('\n');
    console.log(displayString);
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.runGame();

