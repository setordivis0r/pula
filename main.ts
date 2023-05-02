basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # . # #
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            # . . # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . # . # #
            # # . # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . . # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . # #
                # . . # #
                # # . # #
                `)
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . # #
                . # . # #
                # # . # #
                `)
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . # # #
                    . . . # #
                    # # . # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # # . . .
                    # . . # #
                    . . . # #
                    # # . # #
                    `)
                basic.showLeds(`
                    # . # . .
                    # . . . .
                    # . . # #
                    . . . # #
                    # # . # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . # .
                    # . . # #
                    . . . # #
                    # # . # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . #
                    # . . # #
                    . . . # #
                    # # . # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . # #
                    . . # # #
                    # # . # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . # #
                    . . . # #
                    # # # # #
                    `)
                basic.showString("GAME OVER")
            }
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . # # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . # #
                # # # # #
                `)
            basic.showString("GAME OVER")
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showString("GAME OVER")
    }
})
