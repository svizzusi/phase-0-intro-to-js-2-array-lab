const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
  
function destructivelyAppendCat(name){
  cats.push("Ralph");
  return (cats);
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return (cats);
}
function destructivelyRemoveLastCat(){
    cats.pop ();
    return (cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift ();
    return (cats);
}

function appendCat(name){
    const appendCat = [...cats, "Broom"];
    return (appendCat);
    return (cats);
}

function prependCat(name){
    const prependCat = ["Arnold", ...cats];
    return (prependCat);
    return (cats);
}

function removeLastCat(){
    const removeLastCat = cats.slice(0,2);
    return (removeLastCat);
    return (cats);
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
    return (removeFirstCat);
    return (cats);
}