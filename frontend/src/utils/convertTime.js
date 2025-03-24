const convertTime = time => {
    const timeParts = time.split(':')
    let hours = parseInt(timeParts[0])
    let minutes = parseInt(timeParts[1])

    let meridem = 'am'

    if (hours >= 12) {
        meridem = 'pm'
        if (hours > 12) {
            hours -= 12
        }
    }

    return hours.toString().padStart(2) + ":" + minutes.toString().padStart(2, '0') + " " + meridem
}

export default convertTime