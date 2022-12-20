import { ReactElement, useState } from 'react'
import Door from './Door'
import '../styles/calendar.css'

function Calendar(): JSX.Element {
    const [activeDoor, setActiveDoor] = useState<number>(0)

    const switchDoor = (day: number): void => {
        const currentDate = new Date()
        const targetDate = new Date(`December ${day}, 2022`)

        if (currentDate > targetDate) {
            setActiveDoor(day)
        }
    }

    const allDays: number[] = Array.from(new Array(25), (
        _: any,
        i: number
    ): number => {
        return i + 1
    })

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
