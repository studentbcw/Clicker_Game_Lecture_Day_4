let gold = 0;



let backpack = {
price: 100,
quantity: 0,
clickValueAdded: 1,
costIncrease: 1.2
}

function calculateClickValue(){
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    return clickValue
}

function getGold() {
    let calculatedClickValue = calculateClickValue()
    gold = gold + calculatedClickValue
    console.log(gold)
    draw()
}


function draw () {
document.getElementById("Gold-count").innerText = gold
document.getElementById("click-value").innerText = 
calculateClickValue()
}

function getBackpack(){
    if (gold >= backpack.price){
        backpack.quantity = backpack.quantity + 1
        gold -= backpack.price
        backpack.price *= backpack.costIncrease
        draw()

    }
    else{
        alert("You need more minors!")
    }
}