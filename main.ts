input.onButtonPressed(Button.A, function () {
    radio.sendString("1")
})
function flash () {
	
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "1") {
        basic.pause(randint(50, 350))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 10; index++) {
            Variable += -25
            led.setBrightness(Variable)
            basic.pause(40)
        }
        basic.clearScreen()
        Variable = 255
        led.setBrightness(255)
        if (randint(Variable, 9) == 0) {
            basic.pause(500)
            radio.sendString("1")
        }
    }
})
let Variable = 0
radio.setGroup(25)
Variable = 255
