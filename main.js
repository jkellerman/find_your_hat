const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
      this._field = field;
  }

  get field(){
      return this._field;
  }

  //print the field to the terminal in a 2D plane
  print() {
    return this._field.map(row => row.join('')).join('\n')
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

console.log(myField.print());


