function takeShower() {
    return "showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakup(){
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!");
}

wakup();