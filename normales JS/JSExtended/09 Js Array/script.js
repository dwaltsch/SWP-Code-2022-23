const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]
// Filter Method - Filter items that are less than 100
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
// search for items
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
// iterate over array
items.forEach((item) => {
    console.log(item.name)
})
// Returns true if one of the items is less than 100
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
// Returns true if it matches all the items
const hasExpensiveItems = items.every((item) => {
    return item.price <= 10000
})
// Reduce Method - Add all the prices
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)


console.log(items)
console.log(filteredItems)
console.log(foundItem)
console.log(hasInexpensiveItems)
console.log(hasExpensiveItems)
console.log(total)