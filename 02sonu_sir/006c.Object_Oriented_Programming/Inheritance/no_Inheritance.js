// It has no Inheritance

class bug {
    constructor (name, phrase, power){
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.species = "bug"
    }

    hide = () => console.log("You can't catch me now!");
    sayPhrase= () => console.log("this.phrase")
    attack = () => console.log(`I am attacking with a power of ${this.power}!`)
}

class robot {
    constructor (name, phrase, power){
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.species = "robot"
    }

    transform = () => console.log("Optimus Prime!!!")
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I am attacking with a power of ${this.power}!`)
}

const bug1 = new bug ("Buggy", "Your debugger doesn't work with me!", 10)
const robot1 = new robot ("Tito", "I can cook, swim and dance!", 15)
console.log(bug1.power)
robot1.attack()