input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3041, 3923, 59, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    pocitadlo += 1
    basic.showNumber(pocitadlo)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    led.plot(randint(0, 4), randint(0, 4))
    joystickbit.Vibration_Motor(100)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    record.setMicGain(record.AudioLevels.Low)
    record.startRecording(record.BlockingState.Nonblocking)
    while (input.logoIsPressed()) {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
        basic.pause(5)
    }
    music.stopAllSounds()
    basic.clearScreen()
    record.playAudio(record.BlockingState.Blocking)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 849, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() > 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # # # .
            . . # # #
            . . . # #
            . . # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Sad)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.clearScreen()
})
let pocitadlo = 0
joystickbit.initJoystickBit()
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
pocitadlo = 0
basic.showNumber(pocitadlo)
