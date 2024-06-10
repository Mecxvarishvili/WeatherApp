export default function WeekDay ({time}: {time: any}) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(time)

    return (
        <>{daysOfWeek[date.getDay()]}</>
    )
}