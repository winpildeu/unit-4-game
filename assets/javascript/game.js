// global Pokemon team arrays
let myTeam = [];
let rivalTeam = [];
let choice;
let rivalChoice;

// make a Pokemon object w/ a constructor function
function Pokemon(name, hp, weak, strong) {
    this.name = name;
    this.hp = hp;
    this.status = true;
    this.moves = [{
            atkName: weak[0],
            str: weak[1],
            acc: weak[2]
        },
        {
            atkName: strong[0],
            str: strong[1],
            acc: strong[2]
        }
    ];
}

// fighting logic
function fight(myPokemon, rivalPokemon, myMove) {
    // choose a move and rival chooses a random move
    let rivalMove = Math.floor(Math.random() * 2);

    // console.log(`My move: ${myPokemon.moves[myMove].atkName}`);
    // console.log(`Rival move: ${rivalPokemon.moves[rivalMove].atkName}`);

    // check for hit and deal damage
    let dmg1 = accuracy(myPokemon.moves[myMove]);
    let dmg2 = accuracy(rivalPokemon.moves[rivalMove]);
    rivalPokemon.hp -= dmg1;
    myPokemon.hp -= dmg2;

    // the player's Pokemon gets stronger after every move attempt
    myPokemon.moves[myMove].str += 2;

    $("#myHp").text(`${myPokemon.hp}`);
    $("#rivalHp").text(`${rivalPokemon.hp}`);
}

// check if the move actually hits the other pokemon
function accuracy(move) {
    let randNum = (Math.random() * 10);
    // if the random number is less than the accuracy, the move hits
    if (randNum <= move.acc) {
        return move.str;
    } else {
        return 0;
    }
}

// checks the pokemon's HP to see if it has fainted
function checkFaint(myPokemon, rivalPokemon) {
    if (myPokemon.hp <= 0) {
        alert("You lose...");
    }
    if (rivalPokemon.hp <= 0) {
        hideRivalPokemon();
        rivalPokemon.status = false;
        if (rivalTeam.every(obj => obj.status === false)) {
            alert("You won the game!");
        } else {
            chooseRivalPokemon();
        }
    }
}

function chooseRivalPokemon() {
    let stop = false;
    do {
        rivalChoice = Math.floor(Math.random() * 3);
        if (rivalChoice === 0 && rivalTeam[rivalChoice].status === true) {
            $("#rai").css("display", "inline");
            stop = true;
        } else if (rivalChoice === 1 && rivalTeam[rivalChoice].status === true) {
            $("#esp").css("display", "inline");
            stop = true;
        } else if (rivalChoice === 2 && rivalTeam[rivalChoice].status === true) {
            $("#lug").css("display", "inline");
            stop = true;
        }
    } while (stop === false);

    alert(`Rival sent out: ${rivalTeam[rivalChoice].name}`);
    $("#rivalHp").html(`<p>${rivalTeam[rivalChoice].hp}</p>`);
}

function hideRivalPokemon() {
    if (rivalChoice === 0) {
        $("#rai").css("display", "none");
    } else if (rivalChoice === 1) {
        $("#esp").css("display", "none");
    } else if (rivalChoice === 2) {
        $("#lug").css("display", "none");
    }
    $("#rivalHp").html();
}

function hideSelectScreen(num) {
    // $("#info").html(` You selected ${myTeam[num].name}.`);
    $("#info").hide(1000);
    $("#battle").hide(1000);
    $("#pokemonSelect").hide(1000);
}

function initialize() {
    // make the pokemon for my team
    myTeam.push(new Pokemon("Venusaur", 80, ["Weak Atk", 8, 9], ["Strong Atk", 13, 6.5]));
    myTeam.push(new Pokemon("Charizard", 78, ["Weak Atk", 8, 9], ["Strong Atk", 13, 6.5]));
    myTeam.push(new Pokemon("Blastoise", 79, ["Weak Atk", 8, 9], ["Strong Atk", 13, 6.5]));

    // make the pokemon for the rival team
    rivalTeam.push(new Pokemon("Raichu", 60, ["Weak Atk", 5, 9], ["Strong Atk", 10, 6.5]));
    rivalTeam.push(new Pokemon("Espeon", 65, ["Weak Atk", 5, 9], ["Strong Atk", 10, 6.5]));
    rivalTeam.push(new Pokemon("Lugia", 106, ["Weak Atk", 5, 9], ["Strong Atk", 10, 6.5]));
    $("#pokemonSelect").show(1000);
}
// ========== MAIN CODE STARTS HERE ==========

// jQuery stuff
$(document).ready(function () {

    // show the pokemon selection screen
    initialize();

    // click to see info about the pokemon
    $("#v").mouseover(function () {
        $("#info").html(`${myTeam[0].name}: HP: ${myTeam[0].hp}`);
        $("#v").css("border-color", "red");
    });
    $("#c").mouseover(function () {
        $("#info").html(`${myTeam[1].name}: HP: ${myTeam[1].hp}`);
        $("#c").css("border-color", "red");
    });
    $("#b").mouseover(function () {
        $("#info").html(`${myTeam[2].name}: HP: ${myTeam[2].hp}`);
        $("#b").css("border-color", "red");
    });
    $(".pokePics").mouseleave(function () {
        $(this).css("border-color", "black");
    });

    // selecting pokemon and switch to fight screen
    $("#v").click(function () {
        choice = 0;
        hideSelectScreen(choice);
        // Fight screen setup
        $("#ven").css("display", "inline");
        chooseRivalPokemon();
        $("#fightBox").show(1000);
        $("#myHp").html(`<p>${myTeam[choice].hp}</p>`);
        $("#atkButtons").show(1000);
    });
    $("#c").click(function () {
        choice = 1;
        hideSelectScreen(choice);
        // Fight screen setup
        $("#cha").css("display", "inline");
        chooseRivalPokemon();
        $("#fightBox").show(1000);
        $("#myHp").html(`<p>${myTeam[choice].hp}</p>`);
        $("#atkButtons").show(1000);
    });
    $("#b").click(function () {
        choice = 2;
        hideSelectScreen(choice);
        // Fight screen setup
        $("#bla").css("display", "inline");
        chooseRivalPokemon();
        $("#fightBox").show(1000);
        $("#myHp").html(`<p>${myTeam[choice].hp}</p>`);
        $("#atkButtons").show(1000);
    });

    // Attack and fighting events
    $("#quickAtk").click(function () {
        fight(myTeam[choice], rivalTeam[rivalChoice], 0);
        checkFaint(myTeam[choice], rivalTeam[rivalChoice]);
    });
    $("#strongAtk").click(function () {
        fight(myTeam[choice], rivalTeam[rivalChoice], 1);
        checkFaint(myTeam[choice], rivalTeam[rivalChoice]);
    });
});