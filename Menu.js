class Menu {
    constructor(moves, rules) {
        this.moves = moves
        this.rules = rules
    }
    printOptions() {
        console.log('Available moves:')
        for (var i = 0; i < this.moves.length; ++i) {
            console.log(i + 1, ' - ', this.moves[i])
        }
        console.log('0 - exit\n? - help')
    }
    printHelp() {
        this.rules.map.forEach((value, key) => {
            console.log(key, 'beats', value.join(', '))
        })
    }
}
module.exports = Menu