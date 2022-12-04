interface Color {
    color: string
}

interface Text {
    text: string
}

interface Link {
    link: string
}

interface ButtonProps extends Color, Text, Link {}

export type {
    ButtonProps
}
