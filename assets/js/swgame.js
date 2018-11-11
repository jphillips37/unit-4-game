class fighter {
    constructor(name, hp, ap, cap) {
      this.name = name;
      this.hp =  hp;
      this.ap = ap;
      this.cap = cap;
    }
}

let yoda = new fighter("Yoda", "75", "15", "30");
let fett = new fighter("Boba Fett", "100", "10", "26");
let vader = new fighter("Darth Vader", "150", "5", "17");
let maul = new fighter("Darth Maul", "125", "8", "22");

var attacker;
var defender;
var attackerName;
var defenderName;
$(".defender, .enemies, .attacker").hide();

// document.getElementsByClassName("your-char").style.visibility = "hidden";

$(".pic").on("click", function()    {
    if (attacker == null) {
        attackerName = 
    }
})