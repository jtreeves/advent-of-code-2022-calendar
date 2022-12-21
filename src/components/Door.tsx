import { 
    ReactElement, 
} from 'react'
import { DoorProps, Title } from '../interfaces'
import Button from './Button'
import URL from '../data/url'
import TITLES from '../data/titles'

function Door({
    day,
    activeDoor,
    switchDoor
}: DoorProps): JSX.Element {
    const open: boolean = day === activeDoor
    const dayLink: string = URL + day
    const dayTitle: string = TITLES.filter((title: Title): boolean => {
        return title.day === day
    })[0].name

    const closedDoor: ReactElement = <>
        {String(day)}
    </>

    const openDoor: ReactElement = <>
        <Button 
            color='silver'
            text={dayTitle}
            link={dayLink}
        />
    </>

    return (
        <article 
            onClick={() => switchDoor(day)}
            className={!open ? 'red' : 'green'}
        >
            {!open ? closedDoor : openDoor}
        </article>
    )
}

export default Door
