const Rules = require('./Rules.js')
const Menu = require('./Menu.js')
const Key = require('./Key.js')
const HMAC = require('./HMAC.js')

var moves = process.argv.slice(2)
var stdin = process.openStdin()
f = () => {
    var x = Math.floor(Math.random() * moves.length)
    var k = new Key()
    var h = new HMAC(moves[x], k)
    console.log('HMAC:', h.hash.toUpperCase())
    return x, k
}

var copy = moves.map(x => x.toLowerCase())
if (moves.length < 3 || !(moves.length % 2) || new Set(copy).size !== copy.length) {
    console.log('Please specify a number of unique moves that is more than 3 and is an odd number')
    process.exit()
}
var rules = new Rules(moves)
var menu = new Menu(moves, rules)
menu.printOptions()
var aiMove, key = f()
stdin.addListener('data', (data) => {
    var input = data.toString().trim()
    switch (input) {
        case '0': {
            process.exit()
            break
        }
        case '?': {
            menu.printHelp()
            break
        }
        default: {
            var move = parseInt(input) - 1
            if (move in moves) {
                var aiMove = Math.floor(Math.random() * moves.length)
                console.log('Your move:', moves[move] + ',', 'computer\'s move:', moves[aiMove])
                console.log('It\'s a', rules.checkMove(moves[move], moves[aiMove]))
                console.log('HMAC key:', [...key.key].join(''))
                aiMove, key = f()
            }
        }
    }
    menu.printOptions()
})