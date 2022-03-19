// Write your solution here!
//function cats(){}
//can't figure out how to use function
//function cats ([Milo, Otis, Garfield]) {}



/*FunctionArray [cats = "Milo", "Otis", "Garfield"]
let cats= ["Milo", "Otis", "Garfield"]*/
//FunctionArray(cats)["Milo", "Otis", "Garfield"]

//function cats(cats=["Milo", "Otis", "Garfield"])


//let result = Array.isArray(cats)

/*function destructivelyAppendCat(){


//const destructivelyAppendCat = [cats.push, "Ralph"]
//let result = Array.isArray(cats.push,"Ralph")
}*/


const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats
}
    function destructivelyPrependCat(name){
      cats.unshift("Bob") }

function destructivelyRemoveLastCat(){
  cats.pop()
    return cats}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name)
{
    return appendCat =[...cats, "Broom"]}

    function prependCat(name){
return prependCat = ["Arnold", ...cats]
    }

    function removeLastCat(name){
       return removeLastCat = cats.slice(0,2)
    
    }
//function removeFirstCat(){
    //const removeFirstCat = [cats.slice(1)]
    function removeFirstCat(name){
        return removeFirstCat = cats.slice(1)
    }

//const destructivelyAppendCat = ["Milo", "Otis", "Garfield"]
//destructivelyAppendCat.push("Ralph")

//function destructivelyAppendCat(cats){}
//const destructivelyAppendCat = [...cats.splice (2,0,),"Ralph"]}
//console.log (destructivelyAppendCat);

//function destructivelyRemoveLastCat(){}
//function destructivelyRemoveFirstCat(){}


//function removeLastCat(){}
//function removeFirstCat(){}
