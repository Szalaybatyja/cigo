input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    led.plot(2, 2)
    led.plot(4, 4)
})
music.play(music.tonePlayable(349, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
