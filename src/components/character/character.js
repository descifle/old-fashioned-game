class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.attack = 10
        this.defense = 10
    }

    getAttacked = (damage) => {
        if(this.health <= 0) {
            return
        } else {
            this.health -= damage
        }
    }
}

// let mackie = new Character('mackie')
// mackie.getAttacked(10)

// console.log(mackie.health)

export default Character