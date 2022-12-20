interface Color {
    color: string
}

interface Text {
    text: string
}

interface Link {
    link: string
}

interface Day {
    day: number
}

interface ActiveDoor {
    activeDoor: number
}

interface SwitchDoor {
    switchDoor: (day: number) => void 
}

interface DoorProps extends Day, ActiveDoor, SwitchDoor {}

interface ButtonProps extends Color, Text, Link {}

export type {
    ButtonProps,
    Day,
    DoorProps
}
