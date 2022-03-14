let cadena = 0
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
})
function doSomething () {
    while (cadena > 9) {
        cadena = cadena / 10
    }
    basic.showString("" + (Math.round(cadena)))
    basic.showNumber(0)
    cadena = Math.round(cadena)
    return Math.round(cadena)
}
basic.forever(function () {
    cadena = parseFloat(serial.readUntil(serial.delimiters(Delimiters.Space)))
    cadena = cadena * (2 * 10 ** 5)
    serial.writeLine("" + (cadena))
    if (cadena != 0) {
        doSomething()
        if (cadena == 0) {
            servos.P0.setAngle(18)
        } else if (cadena == 1) {
            servos.P0.setAngle(36)
        } else if (cadena == 2) {
            servos.P0.setAngle(54)
        } else if (cadena == 3) {
            servos.P0.setAngle(72)
        } else if (cadena == 4) {
            servos.P0.setAngle(90)
        } else if (cadena == 5) {
            servos.P0.setAngle(108)
        } else if (cadena == 6) {
            servos.P0.setAngle(126)
        } else if (cadena == 7) {
            servos.P0.setAngle(144)
        } else if (cadena == 8) {
            servos.P0.setAngle(162)
        } else if (cadena == 9) {
            servos.P0.setAngle(180)
        }
        basic.clearScreen()
    }
})
