let blue = 0
let green = 0
let red = 0
basic.showIcon(IconNames.Angry)
let light2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    red = 0
    green = 0
    blue = 255
    for (let index = 0; index < 255; index++) {
        red += 1
        blue += -1
        light2.showColor(neopixel.rgb(red, green, green))
        basic.pause(2)
    }
    for (let index = 0; index < 255; index++) {
        green += 1
        red += -1
        light2.showColor(neopixel.rgb(red, green, green))
        basic.pause(2)
    }
    for (let index = 0; index < 255; index++) {
        blue += 1
        green += -1
        light2.showColor(neopixel.rgb(red, green, green))
        basic.pause(2)
    }
})
