import { 
    ReactElement, 
} from 'react'
import { DoorProps } from '../interfaces'
import Button from './Button'

const ADVENT_URL = 'https://adventofcode.com/2022/day/'
const REPO_URL = 'https://github.com/jtreeves/advent_of_code_2022_solutions/tree/main/day'

function Door({
    day,
    activeDoor,
    switchDoor
}: DoorProps): JSX.Element {
    const open: boolean = day === activeDoor
    const problemLink: string = ADVENT_URL + day
    const solutionLink: string = REPO_URL + day

    const closedDoor: ReactElement = <>
        {String(day)}
    </>

    const openDoor: ReactElement = <>
        <Button 
            color='blue'
            text='Problem'
            link={problemLink}
        />

        <Button 
            color='silver'
            text='Solution'
            link={solutionLink}
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
