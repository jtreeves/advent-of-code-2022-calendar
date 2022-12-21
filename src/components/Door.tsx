import { 
    ReactElement, 
} from 'react'
import { 
    DoorProps
} from '../interfaces'
import findDayTitleName from '../utilities/findDayTitleName'
import createDayLink from '../utilities/createDayLink'
import Activity from './Activity'
import '../styles/door.css'

function Door({
    day,
    errorDoor,
    activeDoor,
    switchDoor
}: DoorProps): JSX.Element {
    const open: boolean = day === activeDoor
    const tooEarly: boolean = day === errorDoor
    const dayLink: string = createDayLink(day)
    const dayTitleName: string = findDayTitleName(day)

    const closedDoor: ReactElement = <>
        {String(day)}
    </>

    const tooEarlyDoor: ReactElement = <>
        TOO EARLY!
    </>

    const openDoor: ReactElement = <>
        <Activity 
            color='silver'
            text={dayTitleName}
            link={dayLink}
        />
    </>

    return (
        <article 
            onClick={() => switchDoor(day)}
            className={!open ? 'red' : 'green'}
        >
            {!open && !tooEarly ? closedDoor : tooEarly ? tooEarlyDoor : openDoor}
        </article>
    )
}

export default Door
