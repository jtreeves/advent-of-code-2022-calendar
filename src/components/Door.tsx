import { 
    ReactElement, 
} from 'react'
import { 
    DoorProps
} from '../interfaces'
import findDayTitleName from '../utilities/findDayTitleName'
import createDayLink from '../utilities/createDayLink'
import Activity from './Activity'

function Door({
    day,
    activeDoor,
    switchDoor
}: DoorProps): JSX.Element {
    const open: boolean = day === activeDoor
    const dayLink: string = createDayLink(day)
    const dayTitleName: string = findDayTitleName(day)

    const closedDoor: ReactElement = <>
        {String(day)}
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
            {!open ? closedDoor : openDoor}
        </article>
    )
}

export default Door
