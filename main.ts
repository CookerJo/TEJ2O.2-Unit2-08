/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: March 2026
 * This program will changed the color of the LED to what the color desplay on the microbit
*/

// setup, shows all the color set to the pins
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
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Red')    
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // green
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Green')    
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    
    // blue
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('Blue')    
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    
    // majenta
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Majent')    
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    
    // cyan
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('Cyan')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // yellow
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Yellow')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // white
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('White')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
    
    // come back to start
    basic.showIcon(IconNames.Happy)
})
