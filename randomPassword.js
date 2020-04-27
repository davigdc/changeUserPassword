// Possui os caracteres possiveis para a senha, numeros, simbolos, minusculas e maiusculas
const charactersToRandomize = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '!',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  '-',
  '@',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

/**
 * Retorna um caracter aleatorio do array charactersToRandomize
 * @param {Array} array
 */
function randomCharacterFromArray(array) {
  const arrayLength = array.length - 1;
  const randomIndex = Math.round(Math.random() * arrayLength);
  return array[randomIndex];
}

/**
 * Gera uma string aleatoria com o tamanho passado pelo parametro
 * @param {Number} passwordLenght
 */
function randomPassword(passwordLenght) {
  let randomPassword = '';

  for (let i = 0; i < passwordLenght; i++) {
    randomPassword += randomCharacterFromArray(charactersToRandomize);
  }

  return randomPassword;
}

module.exports = randomPassword;
