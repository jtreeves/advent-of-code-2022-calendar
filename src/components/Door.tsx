import { 
    ReactElement, 
    ReactEventHandler, 
    useState 
} from 'react'
import { Day } from '../interfaces'
import Button from './Button'

const ADVENT_URL = 'https://adventofcode.com/2022/day/'
const REPO_URL = 'https://github.com/jtreeves/advent_of_code_2022_solutions/tree/main/day'

function Door({
    day
}: Day): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)
    const problemLink: string = ADVENT_URL + day
    const solutionLink: string = REPO_URL + day

    const handleClick: ReactEventHandler = (): void => {
        setOpen(!open)
    }

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
            color='red'
            text='Solution'
            link={solutionLink}
        />
    </>

    return (
        <article onClick={handleClick}>
            {!open ? closedDoor : openDoor}
        </article>
    )
}

export default Door
