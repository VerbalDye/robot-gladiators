var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Logs the variables
console.log(playerName, playerAttack, playerHealth);

window.alert("Welcome to Robot Gladiators");

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        // Ask the player what they want to do
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        if (promptFight === "SKIP" || promptFight === "skip") {

            // Asks to confirm
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If player confirms
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye!");
                playerMoney -= 10;
                console.log("playerMoney: " + playerMoney);
                break;
            }
        }
        // Runs if player choses to not skip, whether accidentally or intentionally
        // Lowers enemy health
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // Communicates the outcome to the player.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        // Lowers player health
        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // Communicates the outcome to the player.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
