import { ReactElement } from 'react'
import Door from './Door'
import '../styles/calendar.css'

function Calendar(): JSX.Element {
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
                day={day}
                key={day}
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
