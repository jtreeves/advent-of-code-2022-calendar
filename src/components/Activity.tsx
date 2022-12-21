import { ActivityProps } from '../interfaces'

function Activity({
    text,
    color,
    link
}: ActivityProps): JSX.Element {
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

export default Activity
