let gold = 0;

let backpack = {
  price: 100,
  quantity: 0,
  multiplier: 1
};

let fishFriend = {
  price: 600,
  quantity: 0,
  multiplier: 20
};

let audio = new Audio('./assets/collectcoin-6075.mp3')

function getGold() {

  // gold += 1 + (backpack.quantity * backpack.multiplier)
  audio.play()
  gold += calculateClickValue()
  draw()
}

function draw() {
  document.getElementById('gold-count').innerText = gold.toFixed(0);
  document.getElementById('backpack-count').innerText = backpack.quantity
  document.getElementById('backpack-price').innerText = backpack.price.toFixed(0)
  document.getElementById('fish-count').innerText = fishFriend.quantity
  document.getElementById('click-value').innerText = calculateClickValue()
  document.getElementById('fish-count').innerText = fishFriend.quantity
  document.getElementById('fish-price').innerText = fishFriend.price
}

function calculateClickValue() {
  let clickValue = 1 + (backpack.quantity * backpack.multiplier)
  return clickValue
}

function addBackpack() {
  if (gold >= backpack.price) {
    gold -= backpack.price
    backpack.quantity++
    backpack.price *= 1.2
    draw()
  } else {
    window.alert("You don't have enough to buy the backpack yet! Keep clicking!")
  }
}

function getFishFriend() {
  if (gold >= fishFriend.price) {
    fishFriend.quantity++
    fishFriend.price *= 1.5
    draw()
  } else {
    window.alert("You don't have enough to buy the fish friend yet! Keep clicking!")
  }
}

let fishInterval = setInterval(() => {
  // console.log('fish interval set')
  gold += (fishFriend.quantity * fishFriend.multiplier)
  draw()
}, 3000)

draw()