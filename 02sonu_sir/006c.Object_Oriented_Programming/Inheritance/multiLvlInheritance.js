// multi level inheritance

class character {
    constructor(speed){
        this.speed = speed
    }
    move = () => console.log(`I am moving at the speed of ${this.speed}!`)
}

class enemy extends character {
    constructor(power, speed){
        super(speed)
        this.power = power
    }
    attack = () => console.log(`I am attacking with a power of ${this.power}!!!`)
}

class alien extends enemy {
    constructor(name, phrase, power, speed){
        super(power, speed)
        this.name = name;
        this.phrase = phrase;
        this.species = "alien"
    }
    fly = () => console.log("zzzzzziiiiinnnngggggg!!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new alien ("Ali", "I am Ali the Alien!!!", 10, 50)
const alien2 = new alien ("Lien", "Run for your lives!!!", 15, 60)

alien1.move()
console.log(alien2.speed)