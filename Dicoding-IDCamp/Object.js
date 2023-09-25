const { ConsoleLogEntry } = require("selenium-webdriver/bidi/logEntries");

const user = {}

let object = {
    kendaraan: "Mobil",
    Baju: "Kaos",
    key3: "value3"
}

const character = {
    name: "lol",
    age: "12",
    species: "binatang",
    "Hair Color": "Blond"
}

const user3 = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};

const user2 = {
    firstName: "Luke",
    lastName: "Sky Walker",
    age: 19,
    isJEdi: true
}

console.log(`Halo Nama Saya ${user2.firstName} ${user2.lastName}`)
console.log(`Umur saya ${user2.age} tahun`);


console.log(`Halo saya adalah ${user3.isJedi}`)

// user["hello World"]

const user4 = {
    firstName: "Rafi",
    lastName: "REN",
    age: 19,
    isJedi: true,
    "Kata sapaan": "Hallo Jancok"
}

console.log(`Halo Semua perkenalkan nama ku ${user4.firstName}, Gw dengan kode asisten ${user4.lastName}, berumur ${user4.age} suka dengan kata sapaan ${user4["Kata sapaan"]}, ${user4.isJedi}`)

const spaceship = {
    name: "Miliuim lalalla",
    manufacture: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
}

spaceship.color = "Red"
spaceship.maxSpeed = 123000
spaceship.class = "Light Freighter"
console.log(spaceship)

// Error
// spaceship = {
//     name: "uiuiui"
// }

const spaceship2 = {
    name: "Miliuim lalalla",
    manufacture: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
}

spaceship2.color = "Red"
spaceship2["maxSpeed"] = 123123123
spaceship2.class = "Light Freighter"

console.log(spaceship2)

delete spaceship2.color

console.log(spaceship2)