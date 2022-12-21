import URL from '../data/url'

function createDayLink(
    day: number
): string {
    const dayLink: string = URL + day
    
    return dayLink
}

export default createDayLink
