class Rules {
    constructor(moves) {
        this.map = new Map()
        var l = moves.length
        var half = l / 2 | 0
        moves = moves.concat(moves)
        for (var i = 0; i < l; ++i) {
            var j = (((i - half) % l) + l) % l
            this.map.set(moves[i], moves.slice(j, j + half))
        }
    }
    checkMove(l, r) {
        return (l === r) ? 'draw' : ((this.map.get(l).includes(r) ? 'win' : 'loss'))
    }
}
module.exports = Rules