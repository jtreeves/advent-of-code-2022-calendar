import { ActivityProps } from '../interfaces'
import '../styles/activity.css'

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
