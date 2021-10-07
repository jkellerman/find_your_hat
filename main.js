const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
      this._field = field;
      this.y = 0;
      this.x = 0;
  }

  get field(){
      return this._field;
  }

  //print the field to the terminal in a 2D plane
  print() {
    return this._field.map(row => row.join('')).join('\n')
  }

  //prompt user input and move the player cursor
  
  prompt(){
    let direction = prompt('Which Way? (u for Up, d for Down, l for Left, r for Right)');
    switch(direction.toLowerCase()) {
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
        break;
    }
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

console.log(myField.print());
myField.prompt();

