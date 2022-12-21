function createAllDays(): number[] {
    const allDays: number[] = Array.from(new Array(25), (
        _: any,
        i: number
    ): number => {
        return i + 1
    })

    return allDays
}

export default createAllDays
