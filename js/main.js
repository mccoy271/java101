console.log("main.js");

console.log("add this", 2 + 2, "and another", 3 * 4);

var myName = "Haden";

var lostColors = {yellow: ["dandelion", "mac and cheese"], blue:"chlorine",
                add: function() {
                    return 2+2;
                }
            };
console.log(lostColors.yellow.length);
var crayonBox = ["yellow", "blue", "lemon", lostColors];
var coinpurse = {dimes:1, nickles:3, quarters:2, pennies:3};
var junkDrawer = ["tape", "sticky", 2, "fishing wire", crayonBox, coinpurse];

var sharpObject = true;

console.log("what kind of data is myName", typeof(myName))


var icecream = 3 * 1.5;
console.log(icecream);

var snow = true;
var ice = false;

if (snow === true || ice === true){
    console.log("school is cancelled");
}else {
    console.log("we learn more cool stuff");
}

var day ="Friday";
function myday(){
    var day = "Tuesday";
}

var day = "Wednesday"
myday();

console.log("what day", day);

let phrase = "The quick brown fox jumps over the lazy dog";
console.log("length of phrase", phrase.length);
console.log("where is x", phrase.indexOf("fox jumps"));
console.log("what is 8", phrase.charAt(8));

let newStuff = `<h2>My Favorite Flavors Poems of Ice Cream</h2>
                <p>${phrase}</p>
                <h3>By Haden Hudson</h3>`;
let addToDom = document.getElementById("demo");
addToDom.innerHTML = newStuff;

let domItems = document.getElementsByClassName("super");
console.log("what is domItems", domItems);