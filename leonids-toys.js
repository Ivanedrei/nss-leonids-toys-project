const toys = [{
    id: 1,
    name: "legos",
    category: "building blocks",
    ages: "8+",
    baterriesIncluded: false,
    price: 45
},
{
    id: 2,
    name: "hotwheels",
    category: "toy cars",
    ages: "4+",
    baterriesIncluded: false,
    price: 3
},
{
    id: 3,
    name: "barbies",
    category: "dolls",
    ages: "4+",
    baterriesIncluded: false,
    price: 5
}]
console.log(toys);

for (const toy of toys) {
    console.log(`price for these toys are $${toy.price}`);
}

const electricKeys = {
    id: 4,
    name: "electric keys",
    category: "music",
    ages: "4+",
    batteriesIncluded: true,
    price: 15
}
const yo_yo = {
    id: 5,
    name: "yo-yo",
    category: "classics",
    ages: "5+",
    batteriesIncluded: false,
    price: 3
}

toys.push(electricKeys)
toys.push(yo_yo)

console.log(toys);

const toyToFind = 2

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + 0.05 * toy.price
        console.log(`The ${toy.name} is at $${toy.price}, for ages ${toy.ages}.`);
    }
}

const basketball = {
    name: "basketball",
    category: "ball",
    ages: "6+",
    batteriesIncluded: false,
    price: 8
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}
addToyToInventory(basketball)

for (const toy of toys) {
    console.log(`The ${toys.maker} ${toys.name} costs ${toys.price} dollars. It weighs ${toy.weight} grams.`)
}

console.log(toys)
