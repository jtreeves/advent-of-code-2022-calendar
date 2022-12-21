import { ReactElement, useState } from 'react'
import createAllDays from '../utilities/createAllDays'
import determineNotTooEarly from '../utilities/determineNotTooEarly'
import Door from './Door'
import '../styles/calendar.css'

function Calendar(): JSX.Element {
    const [activeDoor, setActiveDoor] = useState<number>(0)

    const switchDoor = (day: number): void => {
        const isNotTooEarly: boolean = determineNotTooEarly(day)

        if (isNotTooEarly) {
            setActiveDoor(day)
        }
    }

    const allDays: number[] = createAllDays()

    const allDoors: ReactElement[] = allDays.map((
        day: number
    ): ReactElement => {
        return (
            <Door 
                key={day}
                day={day}
                activeDoor={activeDoor}
                switchDoor={switchDoor}
            />
        )
    })

    return (
        <section>
            {allDoors}
        </section>
    )
}

export default Calendar
