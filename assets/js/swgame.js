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

$(".pic").on("click", function()    { // no attacker has been chosen, the first click will be the attacking fighter
    if (attacker == null) {
        attackerName = $(this).attr("value");
        attacker = 1;
        $(".start").hide();
        $("#attack"+attackerName).show();
        $(".enemies").show();
        $("#enemy"+attackerName).hide();

    }
    else if (defenderName == null) {
        defenderName = $(this).attr("value");
        defender = 1;
        $("#enemy"+defenderName).hide();
        $("#defender"+defenderName).show();
    }
    else{

    };
})