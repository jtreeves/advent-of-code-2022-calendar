function determineNotTooEarly(
    day: number
): boolean {
    const currentDate: Date = new Date()
    const targetDate: Date = new Date(`December ${day}, 2022`)
    const isNotTooEarly: boolean = currentDate > targetDate

    return isNotTooEarly
}

export default determineNotTooEarly
