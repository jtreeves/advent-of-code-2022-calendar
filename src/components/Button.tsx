import { ButtonProps } from '../interfaces'

function Button({
    text,
    color,
    link
}: ButtonProps) {
    return (
        <a 
            href={link}
            target='_blank'
            rel='noreferrer'
        >
            <button className={color}>
                {text}
            </button>
        </a>
    )
}

export default Button
