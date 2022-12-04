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

interface ButtonProps extends Color, Text, Link {}

export type {
    ButtonProps,
    Day
}
