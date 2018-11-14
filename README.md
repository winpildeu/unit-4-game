# unit-4-game
This is a Pokemon battle turn-based RPG game made using JS and J.query.

1. On this screen, you choose the pokemon that you want to use. When you hover over the character, it shows the HP of that pokemon.

(image here)

2. Once the pokemon is chosen, then it transitions to the battle screen.

(image here)

3. Once in the battle screen, the computer chooses their pokemon and it's shown on the screen with their HP next to them.

(image here)

4. You can choose to use a "Quick attack" or "Strong attack." Each attack has an "accuracy" then runs through a function to see if it attacks or misses.

```
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
```

(image here)

5. The window alerts you after the rival's pokemon faints and sends out a new one.

(image here)

6. If you win/ lose, the window also alerts you.

(image here)