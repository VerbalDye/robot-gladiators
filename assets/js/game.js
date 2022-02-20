var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Logs the variables
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcom to Robot Gladiators");

    // Ask the player what they want to do
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // If player chose 'fight'
    if (promptFight === "FIGHT" || promptFight === "fight") {

        // Player attacks
        enemyHealth -= playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamining."
        );
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
        }

        //Enemy attacks
        playerHealth -= enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamining."
        );
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
        }

    // If player chooses to skip
    } else if (promptFight === "SKIP" || promptFight === "skip") {

        // Asks to confirm
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If player confirms
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney -= 2;

        // Else recall function
        } else {
            fight();
        }

    // Catches unexpected response and exits loop.
    } else {
        window.alert("Please choose a valid option. Try agian!")
    }
}

fight();