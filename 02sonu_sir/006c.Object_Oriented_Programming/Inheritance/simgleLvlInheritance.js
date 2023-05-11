// single level inheritance

class enemy {
    constructor (power){
        this.power = power
    }
    attack = () => console.log(`I am attacking with a power of ${this.power}!`)
}

class alien extends enemy {
    constructor (name, phrase, power){
        super(power)
        this.name = name;
        this.phrase = phrase;
        this.species = "alien"
    }
    fly = () => console.log("zzzzzzziiiiiinnnnnnggggg!!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new alien ("Ali", "I am Ali the Alien!!!", 10)
const alien2 = new alien ("Lien", "Run for your lives!!!", 15)

alien1.attack()
console.log(alien2.power)