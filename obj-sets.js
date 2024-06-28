const letters = new Set(["a","b","c"]);
letters.add("d");
letters.add("e");
console.log(letters.size);

//forEach() calls a function for each element
let text = "";
letters.forEach(function(value){
    text+=value;
}); console.log(text);


