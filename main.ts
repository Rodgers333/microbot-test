input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 100)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(100)
})
