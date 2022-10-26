radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
