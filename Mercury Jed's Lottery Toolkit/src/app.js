export class App {
  constructor() {
    this.textInput = "";
  }

  get textValue() {
    let charArray = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26
    };
    
    // test
    /* Functionally expressed with es5 function syntax
     *
     * return this.textInput.split('').filter(function(char){
     *   return (char.match(/[a-z]/gi))
     * }).map(function(char){
     *   return charArray[char.toLowerCase()]
     * }).reduce(function(prevNum, currentNum){
     *   return prevNum + currentNum
     * }, 0);
    */

    // Functionally expressed with es6 arrow function syntax
    //
    return this.textInput.split('').filter( char => { 
        return ( char.match(/[a-zA-Z]/g) )
      }).map( char => { 
        return charArray[char.toLowerCase()]
      }).reduce( (prevNum, currentNum) => { 
        return prevNum + currentNum 
      }, 0);
  }
}
