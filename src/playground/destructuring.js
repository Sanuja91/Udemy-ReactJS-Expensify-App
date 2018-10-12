// !!!!!!!!!!! EXAMPLE 1 !!!!!!!!!!!!!!!

const person = {
  name: "Sanuja",
  age: 26,
  location: {
    city: "Colombo",
    temp: 92
  }
}

// Normal way of doing it
// const name = person.name
// const age = person.age

// ES6 Destructuring
const { name, age } = person

// Takes temp from objet and assigns it to a variable temperature
// If city is missing, it sets it to a default value
const { city = "Kandy", temp: temperature } = person.location

// console.log(`${name} is ${age} and is from ${city} where it's ${temperature}`)

// !!!!!!!!!!!!!!!!!!!!!!!!!!CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}

const { name: publisherName = "Self-Published" } = book.publisher

// console.log(publisherName)

// !!!!!!!!!!! EXAMPLE 2 !!!!!!!!!!!!!!!

const address =['1299 S Juniper Street', 'Philadelphia','Pennsylvania','19147']

// Array Destructuring
// Skips the first item and last item
// Sets default for city if item is missing
const [ , cityTwo = 'Colombo', state] = address   


console.log(`You are in ${cityTwo} ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, small, medium, large] = item

console.log(`A ${itemName} costs ${medium}`)