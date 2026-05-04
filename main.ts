/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: March 2026
 * This program will changed the color of the LED to what the color desplay on the microbit
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pause(500)
pins.digitalWritePin(DigitalPin.P13, 0) // blue
pins.digitalWritePin(DigitalPin.P14, 0) // green
pins.digitalWritePin(DigitalPin.P15, 0) // red

// clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

// input
input.onButtonPressed(Button.A, function() {

    // red
    basic.clearScreen()
    basic.showString('Red')
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // green
    basic.clearScreen()
    basic.showString('Green')
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    
    // blue
    basic.clearScreen()
    basic.showString('Blue')
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    
    // majenta
    basic.clearScreen()
    basic.showString('Majent')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    
    // cyan
    basic.clearScreen()
    basic.showString('Cyan')
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // yellow
    basic.clearScreen()
    basic.showString('Yellow')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // white
    basic.clearScreen()
    basic.showString('White')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // black
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
    
    // come back to start
    basic.showIcon(IconNames.Happy)
})
