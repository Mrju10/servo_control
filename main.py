cadena = ""

def on_forever():
    global cadena
    cadena = serial.read_string()
    if cadena == "25":
        servos.P0.set_angle(90)
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
    elif cadena == "30":
        servos.P0.set_angle(0)
        basic.show_icon(IconNames.HOUSE)
        basic.pause(500)
    basic.clear_screen()
basic.forever(on_forever)
