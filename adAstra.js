function adAstra(inputArray) {

    let pattern = /([#]|[\|])(?<itemName>[a-zA-Z\s]+)\1(?<expirDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;
    let text = inputArray[0];
    const CALOR_PER_DAY = 2000;

    let foodItems = {};
    let calorInFood = 0;

    let match = pattern.exec(text);

    while (match != null) {

        let itemName = match.groups["itemName"];
        let expirDate = match.groups["expirDate"];
        let calories = Number(match.groups["calories"]);
        calorInFood += calories

        foodItems[itemName] = {
            itemName,
            expirDate,
            calories,
        };

        match = pattern.exec(text);
    };

    let days = Math.trunc(calorInFood / CALOR_PER_DAY);
    console.log(`You have food to last you for: ${days} days!`);

    for (let item in foodItems) {
        let name = foodItems[item].itemName;
        let expirDate = foodItems[item].expirDate;
        let calories = foodItems[item].calories;

        console.log(`Item: ${name}, Best before: ${expirDate}, Nutrition: ${calories}`);
    };
};

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

console.log(`- - - - - - - -`);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);

console.log(`- - - - - - - -`);

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

