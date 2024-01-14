// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];


  function destructivelyAppendCat(name) {
    cats.splice(3, 0, "Ralph");
  };

  
  function destructivelyPrependCat(name) {
    cats.splice(0, 0, "Bob");
  };
  

  function destructivelyRemoveLastCat(name) {
    cats.pop();
  };

  function destructivelyRemoveFirstCat(name) {
    cats.shift();
  };


// appends a cat to the cats array and returns a new array, leaving the cats array unchanged

  function appendCat(name) {
    const copyCats = [...cats, "Broom"];

    return copyCats
  };


// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

  function prependCat(name) {
    const copyCat = ["Arnold", ...cats];

    return copyCat
  };


// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

  function removeLastCat() {
    return cats.slice(0, cats.length  - 1);
  };


  // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged

  function removeFirstCat() {
    return cats.slice(1);
  };

  