// global Pokemon team arrays
let myTeam = [];
let rivalTeam = [];

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
    }];
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

}

// make the pokemon for my team
myTeam.push(new Pokemon("Blastoise", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
myTeam.push(new Pokemon("Charizard", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
myTeam.push(new Pokemon("Venusaur", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
// console.log(myTeam);

// make the pokemon for the rival team
rivalTeam.push(new Pokemon("Raichu", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
rivalTeam.push(new Pokemon("Umbreon", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
rivalTeam.push(new Pokemon("Lugia", 100, ["Weak Atk", 10, 9], ["Strong Atk", 15, 6.5]));
// console.log(rivalTeam);

// choose the Pokemon you want to use and computer chooses it's Pokemon
let rivalChoice = Math.floor(Math.random() * 3);
let choice = prompt(`Choose your Pokemon:\n0) ${myTeam[0].name}\n1) ${myTeam[1].name}\n2) ${myTeam[2].name}`);

// alert(`Player chooses: ${myTeam[choice].name}`);
// alert(`Rival chooses: ${rivalTeam[rivalChoice].name}`);

// FIGHTING (loop until there is a feint)
fight(myTeam[choice], rivalTeam[rivalChoice]);