//get visible events
export default (events, { title } ) => {
    return events.filter((event) => {
        return event.title.toLowerCase().includes(title.toLowerCase())
    })
}