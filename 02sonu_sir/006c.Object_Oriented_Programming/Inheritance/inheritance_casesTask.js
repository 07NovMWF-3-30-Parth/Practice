// exercise 1

//     class animal {
//         constructor (name, type){
//             this.name = name
//             this.type = type
//         }
//         info(){
//             console.log(`This animal named ${this.name} is ${this.type} type of animal`)
//         }
//     }

//     const danger = {
//         warning() {
//         // return this.name;
//         console.log(`please stay away from this ${this.name}`)
//         }
//     }

//     class jungle extends animal {
//         constructor (name, type){
//             super(name, type)
//             Object.assign(this, danger)
//         }
//     }

// const tiger = new jungle("Tiger", "Wild")
// tiger.info()
// tiger.warning()


//---------------------------------------------------------------------------------------------------------



// // exercise 2 - multi-level inheritance
// // Great Great Grandparents class
// class greatGreatGrandparents {
//     constructor(oldestName){
//         this.oldestName = oldestName
//     }
//     oldestinfo(){
//         console.log(`I m Oldest person in Family, My name is ${this.oldestName}. I am the great great grandfather`)
//     }
// }


// // Great Grandparents class
// class greatGrandparents extends greatGreatGrandparents {
//     constructor(oldestName, olderName){
//         super(oldestName)
//         this.olderName = olderName
//     }
//     olderinfo(){
//         console.log(`I am second generation & My name is ${this.olderName}.`)
//     }
// }


// // Grandparents class
// class grandparents extends greatGrandparents {
//     constructor(oldestName, olderName, oldName){
//         super(oldestName, olderName)
//         this.oldName = oldName
//     }
//     oldinfo(){
//         console.log(`I am third generation & My name is ${this.oldName}.`)
//     }
// }


// // parents class
// class parents extends grandparents {
//     constructor(oldestName, olderName, oldName, name){
//         super(oldestName, olderName, oldName)
//         this.name = name
//     }
//     info(){
//         console.log(`I am fourth generation & My name is ${this.name}.`)
//     }
// }


// // child class
// class child extends parents {
//     constructor(oldestName, olderName, oldName, name, childName){
//         super(oldestName, olderName, oldName, name)
//         this.childName = childName
//     }
//     childinfo(){
//         console.log(`I am fifth generation & My name is ${this.childName}, I'm the youngest person in my family.`)
//     }
// }

// const child1 = new child("Upendra", "Narendra", "Amarendra", "Mahendra", "Pushpendra")
// child1.oldestinfo()
// child1.olderinfo()
// child1.oldinfo()
// child1.info()
// child1.childinfo()

//-----------------------------------------------------------------------------------------------------


// exercise 3
// exercise 3 is done in exercise 2.
