class Menu {
    constructor(moves, rules) {
        this.moves = moves
        this.rules = rules
    }
    printOptions() {
        console.log('Available moves:')
        for (var i = 0; i < this.moves.length; ++i) {
            console.log(i + 1, '-', this.moves[i])
        }
        console.log('0 - exit\n? - help')
    }
    printHelp() {
        var x = Math.max(...(this.moves.map(e => e.length)))
        var s = '═'.repeat(x)
        var j = 1;
        console.log()
        console.log('╔' + s + '╦' + s + '╗')
        console.log('║' + ' '.repeat((x - 1) / 2) + 'W' + ' '.repeat(x / 2) + '║' + ' '.repeat((x - 1) / 2) + 'L' + ' '.repeat(x / 2) + '║')
        console.log('╠' + s + '╬' + s + '╣')
        this.rules.map.forEach((value, key) => {
            value.forEach((e, i, a) => {
                console.log('║' + key + ' '.repeat(x - key.length) + '║' + e + ' '.repeat(x - e.length) + '║')
                if (j === this.rules.map.size && i === a.length - 1) {
                    console.log('╚' + s + '╩' + s + '╝')
                } else {
                    console.log('╠' + s + '╬' + s + '╣')
                }
            })
            j++;
        })
    }
}
module.exports = Menu