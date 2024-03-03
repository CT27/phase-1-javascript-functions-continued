// code your solution here
function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);

}

function mondayWork(activityTwo = "go to the office") {
return (`This Monday, I will ${activityTwo}.`)    


}

// Function to define wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage of wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // Output: "You are !!!amazing!!!"