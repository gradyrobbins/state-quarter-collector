// This is a factory function. It returns a new object every time.
const generateState = function (volume = 10) {
    return Object.create(null, {
        "type": {
            enumerable: true,
            value: "Trash Can"
        },
        "volume": {
            enumerable: true,
            value: volume
        },
        "color": {
            enumerable: true,
            value: "Black"
        }
    })
}
