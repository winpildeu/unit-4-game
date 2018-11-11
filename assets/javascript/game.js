// global Pokemon team arrays
let myTeam = [];
let rivalTeam = [];
let game = true;

// make a Pokemon object w/ a constructor function
function Pokemon(name, hp, weak, strong) {
    this.name = name;
    this.hp = hp;
    this.status = "OK";
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

// Fighting logic
function fight(myPokemon, rivalPokemon) {
    let myMove;
    let rivalMove;

    // choose a move and rival chooses a random move
    let randNum = Math.random() * 2;
    if (randNum <= 1) {
        rivalMove = 0;
    } else {
        rivalMove = 1;
    }

    myMove = prompt(`Choose your move:\n0) ${myPokemon.moves[0].atkName} \n1) ${myPokemon.moves[1].atkName}`);

    console.log(`My move: ${myPokemon.moves[myMove].atkName}`);
    console.log(`Rival move: ${rivalPokemon.moves[rivalMove].atkName}`);

    // check for hit and deal damage
    let dmg1 = accuracy(myPokemon.name, myPokemon.moves[myMove]);
    let dmg2 = accuracy(rivalPokemon.name, rivalPokemon.moves[rivalMove]);
    rivalPokemon.hp -= dmg1;
    myPokemon.hp -= dmg2;

    console.log(`My Pokemon's HP: ${myPokemon.hp}`);
    console.log(`Rival Pokemon's HP: ${rivalPokemon.hp}`);
}

function accuracy(pkmn, move) {
    let randNum = (Math.random() * 10);
    
    if (randNum <= move.acc) {
        alert(`${pkmn} hit for ${move.str} damage!`);
        return move.str;
    } else {
        alert(`${pkmn} missed!`);
        return 0;
    }
}

function checkFeint(pkmn) {
    if (pkmn.hp <= 0) {
        pkmn.status = "feint";
        alert(`${pkmn.name} has feinted.`);
        return true;
    }
}

// ========== MAIN CODE STARTS HERE ==========

// Initialize
// make the pokemon for my team
myTeam.push(new Pokemon("Blastoise", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
myTeam.push(new Pokemon("Charizard", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
myTeam.push(new Pokemon("Venusaur", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
// console.log(myTeam);

// make the pokemon for the rival team
rivalTeam.push(new Pokemon("Raichu", 00, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
rivalTeam.push(new Pokemon("Umbreon", 00, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
rivalTeam.push(new Pokemon("Lugia", 00, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
// console.log(rivalTeam);

// choose the Pokemon you want to use and computer chooses it's Pokemon
let rivalChoice = Math.floor(Math.random() * 3);
let choice = prompt(`Choose your Pokemon:\n0) ${myTeam[0].name}\n1) ${myTeam[1].name}\n2) ${myTeam[2].name}`);

console.log(`Player chooses: ${myTeam[choice].name}`);
console.log(`Rival chooses: ${rivalTeam[rivalChoice].name}`);

// FIGHTING (loop until there is a feint)
fight(myTeam[choice], rivalTeam[rivalChoice]);
if (checkFeint(myTeam[choice])) {
    // hide the feinted pokemon's element
    choice = prompt(`Choose your Pokemon:\n0) ${myTeam[0].name}\n1) ${myTeam[1].name}\n2) ${myTeam[2].name}`);
    alert(`Player sent out ${myTeam[choice].name}.`);
}
if (checkFeint(rivalTeam[rivalChoice])) {
    let finished = false;
    while (finished === false) {
        let randNum = Math.floor(Math.random() * 3);
        if (rivalTeam[randNum].status === "OK") {
            rivalChoice = randNum;
            alert(`Rival sent out ${rivalTeam[rivalChoice].name}.`);
            finished = true;
        }
    }
}
// checkWin();
// game = false ==> reset game